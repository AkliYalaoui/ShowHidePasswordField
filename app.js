new Vue({
    el: '#vue-app',
    data: {
        inputField: 'password',
        titleValue: 'Show',
        spanIcon: 'visibility'
    },
    methods: {
        ToggleVisibility: function () {
            this.inputField = this.inputField === 'password' ? 'text' : 'password';
            this.titleValue = this.inputField === 'password' ? 'show' : 'hide';
            this.spanIcon = this.inputField === 'password' ? 'visibility' : 'visibility_off';
        }
    },
    computed: {

    }

});
