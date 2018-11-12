const technologies = [
  // Please maintain alphabetical order when you add a technology(validate with "npm test")  :)
  // Date format is YYYY-MM-DD
  { name: ".NET Core", released: new Date("2016-06-27"), link: "https://www.microsoft.com/net" },
  { name: ".NET Framework", released: new Date("2002-02-13"), link: "https://www.microsoft.com/net" },
  { name: "ABAP", released: new Date("1983-01-01"), icon: "abap", link: "https://en.wikipedia.org/wiki/ABAP" },
  { name: "Ada", released: new Date("1980-01-01"), link: "https://en.wikipedia.org/wiki/Ada_(programming_language)" },
  { name: "AdonisJs", released: new Date("2015-08-15"), link: "https://adonisjs.com/" },
  { name: "Airflow (Apache)", released: new Date("2017-04-19"), link: "https://airflow.apache.org/" },
  { name: "Amazon Web Services", released: new Date("2004-03-15"), link: "https://aws.amazon.com/", icon: "aws" },
  { name: "Android", released: new Date("2008-09-23"), icon: "android", link: "https://www.android.com/" },
  { name: "Angular", released: new Date("2016-09-14"), icon: "angular", link: "https://angular.io/" },
  { name: "AngularJS", released: new Date("2010-10-20"), icon: "angular", link: "https://angularjs.org/" },
  { name: "Ansible", released: new Date("2012-03-20"), link: "https://www.ansible.com/" },
  { name: "Assembly", released: new Date("1949-01-01"), icon: "asm", link: "https://en.wikipedia.org/wiki/Assembly_language" },
  { name: "Aurelia", released: new Date("2014-12-10"), link: "https://aurelia.io/" },
  { name: "Babbage Assembly", released: new Date("1971-01-01"), link: "https://en.wikipedia.org/wiki/Babbage_(programming_language)" },
  { name: "Babel", released: new Date("2014-09-28"), link: "https://babeljs.io/" },
  { name: "BackBoneJS", released: new Date("2010-10-13"), icon: "backbone", link: "https://backbonejs.org/" },
  { name: "Bash", released: new Date("1989-06-08"), link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
  { name: "BASIC", released: new Date("1964-05-01"), link: "https://en.wikipedia.org/wiki/BASIC" },
  { name: "Bootstrap 4", released: new Date("2018-01-18"), icon: "bootstrap", link: "https://getbootstrap.com/" },
  { name: "Brainfuck", released: new Date("1993-09-01"), link: "https://en.wikipedia.org/wiki/Brainfuck" },
  { name: "Bulma", released: new Date("2016-01-24"), link: "https://bulma.io/" },
  { name: "C", released: new Date("1972-01-01"), icon: "c", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: "C#", released: new Date("2001-12-01"), icon: "cSharp", link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
  { name: "C++", released: new Date("1985-10-01"), icon: "cPlusPlus", link: "http://www.cplusplus.com/" },
  { name: "Caddy", released: new Date("2015-04-28"), link: "https://caddyserver.com/" },
  { name: "CakePHP", released: new Date("2005-04-01"), icon: "cakePHP", link: "https://cakephp.org/" },
  { name: "Cassandra", released: new Date("2010-04-12"), link: "http://cassandra.apache.org/" },
  { name: "CFML", released: new Date("1995-07-02"), link: "https://en.wikipedia.org/wiki/ColdFusion_Markup_Language" },
  { name: "Chef", released: new Date("2009-01-15"), icon: "chef", link: "https://www.chef.io/" },
  { name: "Clojure", released: new Date("2007-10-16"), link: "https://clojure.org/" },
  { name: "COBOL", released: new Date("1959-01-01"), link: "https://en.wikipedia.org/wiki/COBOL" },
  { name: "CodeIgniter", released: new Date("2006-03-28"), icon: "codeIgniter", link: "https://codeigniter.com/" },
  { name: "ColdFusion", released: new Date("1995-07-02"), link: "https://en.wikipedia.org/wiki/Adobe_ColdFusion" },
  { name: "Concourse", released: new Date("2014-04-19"), icon: "concourseci", link: "https://concourse-ci.org" },
  { name: "Corona (Game Engine)", released: new Date("2009-12-01"), link: "https://coronalabs.com/" },
  { name: "CouchDB", released: new Date("2005-03-01"), link: "http://couchdb.apache.org/" },
  { name: "Crystal", released: new Date("2014-07-18"), link: "https://crystal-lang.org/" },
  { name: "CSS", released: new Date("1996-12-17"), icon: "css", link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets" },
  { name: "D3", released: new Date("2010-09-27"), link: "https://d3js.org/", icon: "d3" },
  { name: "Dart", released: new Date("2011-11-10"), link: "https://www.dartlang.org/" },
  { name: "Data Analysis Expressions (DAX)", released: new Date("2010-05-01"), link: "https://docs.microsoft.com/en-us/previous-versions/sql/sql-server-2012/gg399181(v=sql.110)" },
  { name: "Direct3D", released: new Date("1996-06-02"), link: "https://docs.microsoft.com/en-us/windows/desktop/direct3d" },
  { name: "Django", released: new Date("2005-07-15"), icon: "django", link: "https://www.djangoproject.com/" },
  { name: "Docker", released: new Date("2013-03-13"), icon: "docker", link: "https://www.docker.com/" },
  { name: "Drupal", released: new Date("2000-05-18"), icon: "drupal", link: "https://www.drupal.org/" },
  { name: "Elasticsearch", released: new Date("2010-02-08"), link: "https://www.elastic.co/products/elasticsearch" },
  { name: "Electron", released: new Date("2013-04-12"), icon: "electron", link: "https://electronjs.org/" },
  { name: "Elixir", released: new Date("2011-01-01"), link: "https://elixir-lang.org/" },
  { name: "Elm", released: new Date("2012-04-01"), link: "https://elm-lang.org/" },
  { name: "Ember.js", released: new Date("2011-12-08"), link: "https://www.emberjs.com/", icon: "ember" },
  { name: "Erlang", released: new Date("1986-01-01"), icon: "erlang", link: "https://www.erlang.org/" },
  { name: "Express.js", released: new Date("2010-11-16"), link: "https://expressjs.com/" },
  { name: "F#", released: new Date("2005-06-21"), link: "https://fsharp.org/" },
  { name: "Firebase", released: new Date("2012-04-01"), icon: "Firebase", link: "https://firebase.google.com/" },
  { name: "Flask", released: new Date("2010-04-01"), link: "https://en.wikipedia.org/wiki/Flask_(web_framework)" },
  { name: "Flutter", released: new Date("2017-06-12"), link: "https://flutter.io/" },
  { name: "Fortran", released: new Date("1956-10-15"), link: "https://en.wikipedia.org/wiki/Fortran" },
  { name: "fsl", released: new Date("2017-08-26"), link: "https://fsl.fmrib.ox.ac.uk/fsl/fslwiki" },
  { name: "Gatsby", released: new Date("2017-08-06"), icon: "gatsby", link: "https://www.gatsbyjs.org/" },
  { name: "Gearman", released: new Date("2009-01-08"), link: "http://gearman.org/" },
  { name: "Gensim", released: new Date("2009-08-31"), link: "https://radimrehurek.com/gensim/" },
  { name: "Ghost", released: new Date("2013-10-14"), link: "https://ghost.org/" },
  { name: "Git", released: new Date("2005-04-03"), icon: "git", link: "https://git-scm.com/" },
  { name: "Go", released: new Date("2009-10-10"), icon: "go", link: "https://golang.org/" },
  { name: "Grafana", released: new Date("2013-12-11"), icon: "grafana", link: "https://grafana.com/" },
  { name: "GraphQL", released: new Date("2015-07-02"), icon: "graphQL", link: "https://graphql.org/" },
  { name: "Groovy", released: new Date("2007-01-02"), icon: "groovy", link: "http://groovy-lang.org/" },
  { name: "Hadoop (Apache)", released: new Date("2011-12-10"), link: "https://hadoop.apache.org/" },
  { name: "HANA", released: new Date("2010-06-18"), icon: "hana", link: "https://www.sap.com/products/hana.html" },
  { name: "HAProxy", released: new Date("2001-12-16"), link: "https://www.haproxy.org/" },
  { name: "Haskell", released: new Date("1990-01-01"), icon: "haskell", link: "https://www.haskell.org/" },
  { name: "Haxe", released: new Date("2005-01-01"), link: "https://haxe.org/" },
  { name: "Hive (Apache)", released: new Date("2015-10-22"), link: "https://hive.apache.org/" },
  { name: "HTML", released: new Date("1993-06-01"), icon: "html", link: "https://en.wikipedia.org/wiki/HTML" },
  { name: "Hugo", released: new Date("2013-06-05"), link: "https://gohugo.io/" },
  { name: "Hyper-V", released: new Date("2008-06-26"), link: "https://en.wikipedia.org/wiki/Hyper-V" },
  { name: "Hyperledger", released: new Date("2015-12-01"), link: "https://en.wikipedia.org/wiki/Hyperledger" },
  { name: "IBM Notes", released: new Date("1989-12-07"), link: "https://en.wikipedia.org/wiki/IBM_Notes" },
  { name: "Inferno JS", released: new Date("2015-12-19"), link: "https://infernojs.org", icon: "infernojs" },
  { name: "Ionic", released: new Date("2013-11-01"), icon: "ionic", link: "https://ionicframework.com/" },
  { name: "Java", released: new Date("1996-10-10"), icon: "java", link: "https://www.java.com/" },
  { name: "JavaScript", released: new Date("1995-12-04"), icon: "javaScript", link: "https://www.javascript.com/" },
  { name: "Jekyll", released: new Date("2008-11-17"), icon: "jekyll", link: "https://jekyllrb.com/" },
  { name: "Jenkins (formerly Hudson)", released: new Date("2005-02-07"), icon: "jenkins", link: "https://jenkins.io/" },
  { name: "jQuery", released: new Date("2006-08-26"), icon: "jquery", link: "https://jquery.com/" },
  { name: "jssm", released: new Date("2017-05-03") },
  { name: "Julia", released: new Date("2012-01-01"), link: "https://julialang.org/" },
  { name: "Kafka (Apache)", released: new Date("2011-08-15"), icon: "kafka", link: "https://kafka.apache.org/" },
  { name: "Karaf", released: new Date("2010-08-23"), link: "https://karaf.apache.org/" },
  { name: "Keras", released: new Date("2015-04-27"), link: "https://keras.io/" },
  { name: "Knockout", released: new Date("2010-08-05"), link: "https://knockoutjs.com/" },
  { name: "Kotlin", released: new Date("2011-07-01"), link: "https://kotlinlang.org/" },
  { name: "Kubernetes", released: new Date("2014-07-07"), link: "https://kubernetes.io/" },
  { name: "Laravel", released: new Date("2011-09-09"), icon: "laravel", link: "https://laravel.com/" },
  { name: "Laravel 4", released: new Date("2013-06-28"), icon: "laravel", link: "https://laravel.com/" },
  { name: "Laravel 5", released: new Date("2015-03-04"), icon: "laravel", link: "https://laravel.com/" },
  { name: "LaTeX", released: new Date("1983-01-01"), link: "https://www.latex-project.org/" },
  { name: "Linux", released: new Date("1991-08-25"), link: "https://www.linux.org/", icon: "linux" },
  { name: "Lisp", released: new Date("1958-08-01"), link: "https://en.wikipedia.org/wiki/Lisp_(programming_language)" },
  { name: "Lodash", released: new Date("2012-04-23"), link: "https://lodash.com/" },
  { name: "Logo", released: new Date("1967-01-01"), link: "http://el.media.mit.edu/logo-foundation/" },
  { name: "Lua", released: new Date("1993-07-28"), icon: "lua", link: "https://www.lua.org/" },
  { name: "Lucene (Apache)", released: new Date("1999-09-24"), link: "https://lucene.apache.org/" },
  { name: "Magento", released: new Date("2008-03-31"), link: "https://magento.com/", icon: "magento" },
  { name: "Markdown", released: new Date("2004-03-19"), link: "https://daringfireball.net/projects/markdown/" },
  { name: "Maven", released: new Date("2004-08-13"), link: "https://maven.apache.org/" },
  { name: "Mercurial", released: new Date("2005-04-19"), link: "https://www.mercurial-scm.org/" },
  { name: "Mesos (Apache)", released: new Date("2016-08-27"), link: "http://mesos.apache.org/" },
  { name: "Metal", released: new Date("2014-06-02"), link: "https://en.wikipedia.org/wiki/Metal_(API)" },
  { name: "Meteor", released: new Date("2012-01-20"), icon: "meteor" },
  { name: "Microsoft Azure", released: new Date("2010-02-01"), link: "https://azure.microsoft.com/en-us/" },
  { name: "MIPS", released: new Date("1985-02-01"), link: "https://en.wikipedia.org/wiki/MIPS_architecture" },
  { name: "MongoDB", released: new Date("2009-02-11"), icon: "mongoDB", link: "https://www.mongodb.com/" },
  { name: "MS-DOS", released: new Date("1981-08-12"), link: "https://en.wikipedia.org/wiki/MS-DOS" },
  { name: "MUMPS", released: new Date("1966-06-01"), link: "https://en.wikipedia.org/wiki/MUMPS" },
  { name: "MySQL", released: new Date("1995-05-23"), icon: "mySQL", link: "https://www.mysql.com/" },
  { name: "NativeScript", released: new Date("2015-05-04"), icon: "nativescript", link: "https://www.nativescript.org" },
  { name: "Nette", released: new Date("2013-06-03"), link: "https://www.nette.org/" },
  { name: "Nginx", released: new Date("2004-10-04"), link: "https://www.nginx.com/", icon: "nginx" },
  { name: "Node.js", released: new Date("2009-05-27"), icon: "nodeJs", link: "https://nodejs.org/" },
  { name: "Numpy", released: new Date("2006-08-26"), link: "http://www.numpy.org/" },
  { name: "Objective-C", released: new Date("1984-01-01"), link: "https://en.wikipedia.org/wiki/Objective-C" },
  { name: "OCaml", released: new Date("1996-01-01"), link: "https://ocaml.org/" },
  { name: "OpenGL", released: new Date("1992-06-30"), link: "https://www.opengl.org/" },
  { name: "OpenStack", released: new Date("2010-10-21"), icon: "openstack", link: "https://www.openstack.org/" },
  { name: "pandas", released: new Date("2008-02-11"), link: "https://pandas.pydata.org/" },
  { name: "Perl", released: new Date("1987-12-18"), link: "https://www.perl.org/" },
  { name: "Phalcon", released: new Date("2012-11-14") },
  { name: "Phoenix", released: new Date("2014-04-30"), link: "https://phoenixframework.org/" },
  { name: "PHP", released: new Date("1995-06-08"), icon: "php", link: "http://www.php.net/" },
  { name: "PHPStan", released: new Date("2016-06-17"), link: "https://github.com/phpstan" },
  { name: "Polymer", released: new Date("2015-06-02"), link: "https://www.polymer-project.org/" },
  { name: "PostgreSQL", released: new Date("1996-07-08"), link: "https://www.postgresql.org/" },
  { name: "Power BI", released: new Date("2015-07-24"), link: "https://powerbi.microsoft.com/en-us/" },
  { name: "Power BI Embedded", released: new Date("2016-07-07"), link: "https://powerbi.microsoft.com/en-us/power-bi-embedded/" },
  { name: "Power Query M Formula Language", released: new Date("2015-07-24"), link: "https://msdn.microsoft.com/en-us/library/mt270235.aspx" },
  { name: "Preact", released: new Date("2015-09-11"), link: "https://preactjs.com/" },
  { name: "Prometheus", released: new Date("2012-11-24"), icon: "prometheus", link: "https://prometheus.io/" },
  { name: "Protovis", released: new Date("2007-10-07"), link: "http://mbostock.github.io/protovis/" },
  { name: "Pyramid", released: new Date("2008-07-08"), link: "https://trypyramid.com" },
  { name: "Python 1", released: new Date("1991-02-20"), icon: "python", link: "https://www.python.org/" },
  { name: "Python 2", released: new Date("2000-11-16"), icon: "python", link: "https://www.python.org/" },
  { name: "Python 3", released: new Date("2008-12-03"), icon: "python", link: "https://www.python.org/" },
  { name: "PyTorch", released: new Date("2016-08-26"), link: "https://pytorch.org/" },
  { name: "R", released: new Date("1993-08-01"), icon: "r", links: "https://www.r-project.org/" },
  { name: "RabbitMQ", released: new Date("2007-02-08"), link: "https://www.rabbitmq.com/" },
  { name: "Racket", released: new Date("1995-01-01"), icon: "racket", link: "https://racket-lang.org/" },
  { name: "Ramda", released: new Date("2013-05-29"), icon: "react", link: "https://ramdajs.com/" },
  { name: "React", released: new Date("2013-05-29"), icon: "react", link: "https://reactjs.org/" },
  { name: "React Native", released: new Date("2016-03-24"), icon: "react", link: "https://facebook.github.io/react-native/" },
  { name: "Redis", released: new Date("2009-06-10"), icon: "redis", link: "https://redis.io/" },
  { name: "Redux", released: new Date("2015-06-02"), link: "https://redux.js.org/", icon: "redux" },
  { name: "Rexx", released: new Date("1979-03-20"), link: "http://rexxla.org/" },
  { name: "Rollup", released: new Date("2015-05-15"), link: "https://rollupjs.org/" },
  { name: "Ruby", released: new Date("1995-12-21"), icon: "ruby", link: "https://www.ruby-lang.org/" },
  { name: "Ruby on Rails", released: new Date("2005-12-21"), icon: "rails", link: "https://rubyonrails.org/" },
  { name: "Rust", released: new Date("2015-06-05"), icon: "rust", link: "https://www.rust-lang.org/" },
  { name: "RxJs", released: new Date("2013-03-01"), link: "https://rxjs-dev.firebaseapp.com" },
  { name: "Sass", released: new Date("2006-11-28"), icon: "sass", link: "https://sass-lang.com/" },
  { name: "Scala", released: new Date("2004-02-20"), link: "https://www.scala-lang.org/" },
  { name: "Scheme", released: new Date("1975-12-01"), link: "http://www.scheme-reports.org/" },
  { name: "scikit-learn", released: new Date("2007-06-01"), link: "http://scikit-learn.org/" },
  { name: "Serverless Framework", released: new Date("2015-12-01"), link: "https://serverless.com/" },
  { name: "Shiny", released: new Date("2012-11-12"), links: "https://shiny.rstudio.com/" },
  { name: "Smalltalk", released: new Date("1980-01-01"), link: "https://en.wikipedia.org/wiki/Smalltalk" },
  { name: "Solidity", released: new Date("2014-08-01"), link: "https://en.wikipedia.org/wiki/Solidity" },
  { name: "Spark (Apache)", released: new Date("2014-06-26"), link: "https://spark.apache.org/" },
  { name: "Spring", released: new Date("2002-10-01"), link: "https://spring.io/" },
  { name: "SQL", released: new Date("1979-06-01"), link: "https://docs.oracle.com/cd/E12151_01/index.htm" },
  { name: "Swift", released: new Date("2014-06-02"), icon: "swift", link: "https://swift.org/" },
  { name: "Symfony", released: new Date("2011-07-28"), icon: "symfony", link: "https://symfony.com/" },
  { name: "Tensorflow", released: new Date("2015-12-09"), icon: "tensorflow", link: "https://www.tensorflow.org/" },
  { name: "Terraform", released: new Date("2014-08-28"), link: "https://www.terraform.io/" },
  { name: "The World Wide Web", released: new Date("1990-12-25"), icon: "www", link: "https://en.wikipedia.org/wiki/World_Wide_Web" },
  { name: "This project", released: new Date("2018-10-25"), link: "https://howoldisit.glitch.me/" },
  { name: "TOML", released: new Date("2013-01-23"), link: "https://github.com/toml-lang/toml" }, 
  { name: "Traefik", released: new Date("2015-09-13"), link: "https://traefik.io" },  
  { name: "Twig", released: new Date("2009-09-12"), link: "https://en.wikipedia.org/wiki/Twig_(template_engine)" },
  { name: "TypeScript", released: new Date("2012-10-01"), icon: "typeScript", link: "https://www.typescriptlang.org/" },
  { name: "Ubuntu", released: new Date("2004-10-20"), link: "https://www.ubuntu.com" },
  { name: "Underscore.js", released: new Date("2009-10-28"), link: "https://underscorejs.org/" },
  { name: "Unity (Game Engine)", released: new Date("2005-06-06"), icon: "unityGameEngine", link: "https://unity3d.com/" },
  { name: "Visual Basic 6", released: new Date("1998-06-01"), icon: "basic", link: "https://en.wikipedia.org/wiki/Visual_Basic" },
  { name: "Vue", released: new Date("2014-02-01"), icon: "vue", link: "https://vuejs.org/" },
  { name: "Vulkan", released: new Date("2016-02-16"), link: "https://www.khronos.org/vulkan/" },
  { name: "Webpack", released: new Date("2012-03-10"), link: "https://webpack.js.org/", icon: "webpack" },
  { name: "Windows 10", released: new Date("2015-07-29"), icon: "windows", link: "https://www.microsoft.com/en-us/windows" },
  { name: "WordPress", released: new Date("2003-05-27"), icon: "wordpress", link: "https://wordpress.org/" },
  { name: "WPF", released: new Date("2006-12-21"), link: "https://en.wikipedia.org/wiki/Windows_Presentation_Foundation" },
  { name: "Xamarin Forms", released: new Date("2014-05-28"), link: "https://github.com/xamarin/Xamarin.Forms" },
  { name: "XAML", released: new Date("2008-07-01"), link: "https://en.wikipedia.org/wiki/Extensible_Application_Markup_Language" },
  { name: "XML", released: new Date("1998-02-10"), icon: "xml", link: "https://en.wikipedia.org/wiki/XML" },
  { name: "Zend Framework 0.1.1", released: new Date("2006-03-03"), link: "https://framework.zend.com/" },
  { name: "Zend Framework 1", released: new Date("2007-06-30"), link: "https://framework.zend.com/" },
  { name: "Zend Framework 2", released: new Date("2012-09-04"), link: "https://framework.zend.com/" },
  { name: "Zend Framework 3", released: new Date("2016-06-28"), link: "https://framework.zend.com/" }
];

export default technologies;
