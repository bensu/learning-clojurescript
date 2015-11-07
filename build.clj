(require 'cljs.repl)
(require 'cljs.build.api)
(require 'cljs.repl.browser)
(require 'cljs.repl.node)

(defonce action (first *command-line-args*))

(defonce build (if (= action "watch")
                   cljs.build.api/watch
                   cljs.build.api/build))

(build "src"
       {:main 'cljs_draw.core
        :output-to "resources/public/out/frontend.js"})

(if (= action "repl")
  (cljs.repl/repl (cljs.repl.browser/repl-env)
                  :watch "01-pressure-draw"
                  :output-dir "resources/public/out"
                  :output-to "out/main.js"))
