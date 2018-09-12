Selectize.define('preserve_search', function (options) {
    var self = this;

    options.text = options.text || function (option) {
        return option[this.settings.labelField];
    };

    this.onBlur = (function (e) {
        var original = self.onBlur;

        return function (e) {
            // Capture the current input value
            var $input = this.$control_input;
            var inputValue = $input.val();

            // Do the default actions
            original.apply(this, [e]);

            // Set the value back                    
            this.setTextboxValue(inputValue);
        };
    })();

    this.onOptionSelect = (function (e) {
        var original = self.onOptionSelect;

        return function (e) {
            // Capture the current input value
            var $input = this.$control_input;
            var inputValue = $input.val();

            original.apply(this, [e]);
            this.setTextboxValue(inputValue);
            this.refreshOptions();
            if (this.currentResults.items.length <= 0) {
                this.setTextboxValue('');
                this.refreshOptions();
            }
        };
    })();
});
