<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show/hide Password</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="vue-app">
        <form action="">
            <input 
                  <?php  if(!strpos($_SERVER['HTTP_USER_AGENT'],'Edg'))
                           echo ':type="inputField"';
                         else
                            echo 'type="password"'; ?>  ref="inputPswd" >
            <!--            prevent the default behavior-->
            <?php  if(!strpos($_SERVER['HTTP_USER_AGENT'],'Edg')){ ?>
            <span @click="ToggleVisibility" :title="titleValue" class="material-icons">
                {{spanIcon}}
            </span> <?php } ?>
        </form>
    </div>
    <script src="app.js"></script>
</body></html>
