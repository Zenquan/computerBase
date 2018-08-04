const sea = {
    use(path, fn_end) {
        $.ajax({
            url: path,
            success(str) {
                function define(fn) {
                    let module = {
                        exports: {}
                    };
                    fn(function () {

                    }, module.exports, module);
                    fn_end(module.exports);
                }
               eval(str); 
            },
            error() {
                alert('error');
            }
        })
    }
}