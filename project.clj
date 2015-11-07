(defproject cljs-draw "0.0.1-SNAPSHOT"
  :description "draw stuff"

  :clean-targets ^{:protect false} [:target-path "resources/public/out"]

  :dependencies
  [[org.clojure/clojurescript "1.7.145"]
   [org.clojure/core.async "0.1.346.0-17112a-alpha"]
   [org.omcljs/om "0.9.0"]
   [kovasb/gamma "0.0-135"]
   [kovasb/gamma-driver "0.0-49"]
   [fipp "0.6.2"]
   [thi.ng/geom "0.0.783"]
   [thi.ng/math "0.1.0"]]

  :plugins [[lein-figwheel "0.4.1"]]
  
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:asset-path "out"
                                   :output-to "resources/public/out/frontend.js"
                                   :output-dir "resources/public/out"
                                   :source-map true
                                   :main "cljs-draw.core"}}]})
