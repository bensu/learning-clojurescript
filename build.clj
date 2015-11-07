(require 'cljs.repl)
(require 'cljs.build.api)
(require 'cljs.repl.browser)
(require 'cljs.repl.node)

(defonce action (first *command-line-args*))

(defonce build (if (= action "watch")
                   cljs.build.api/watch
                   cljs.build.api/build))

(build "src"
       {:asset-path "out"
        :output-to "resources/public/out/frontend.js"
        :output-dir "resources/public/out"
        :optimizations :none
        :source-map true
        :main 'cljs-draw.core})

(if (= action "repl")
  (cljs.repl/repl (cljs.repl.browser/repl-env)
                  :watch "src"
                  :output-to "resources/public/out/frontend.js"
                  :output-dir "resources/public/out"))
