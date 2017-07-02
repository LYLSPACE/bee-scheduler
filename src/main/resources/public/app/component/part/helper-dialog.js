define(['text!part/helper-dialog.html', 'vue'], function (tpl, Vue) {
    var HelperDialogConstructor = Vue.extend({
        template: tpl,
        components: {},
        data: function () {
            return {
                helperDialogVisible: false
            };
        },
        watch: {
            'helperDialogVisible': function (visible) {
                if (!visible) {
                    this.$el.addEventListener('animationend', this.destroyElement);
                }
            }
        },
        mounted: function () {
        },
        methods: {
            destroyElement: function () {
                this.$el.removeEventListener('animationend', this.destroyElement);
                // this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },
            open: function (title) {
                this.helperDialogVisible = true;
                if (title) {

                }
            }
        }
    });

    var HelperDialog = {
        comp: null,
        open: function (title) {
            if (this.comp === null) {
                this.comp = (new HelperDialogConstructor()).$mount();
            }
            window.document.body.appendChild(this.comp.$el);
            this.comp.helperDialogVisible = true;
            if (title) {
            }
        }
    };
    return HelperDialog;
});