var requirejs, require, define;
(function (global, setTimeout) {
    //1、定义一些变量与工具方法
    var req, s, head //一些变量
    
    //一些工具函数
    
    //2、创建一个模块加载的上下文
    function newContext(contextName) {
        //somecode
        
        //定义一个模块加载器
        Module = function (map) {}
        Module.prototype = {
            //原型链上
        };
        
        context = { //上下文环境
            config: config, //配置
            contextName: contextName, //默认为 "_"
            nextTick: req.nextTick, //通过setTimeout，把执行放到下一个队列
            makeRequire: function (relMap, options) {
                
                function localRequire () {
                    //somecode
                    //通过setTimeout的方式加载依赖，放入下一个队列，保证加载顺序
            		context.nextTick(function () {
            		
            			intakeDefines();
            
            			requireMod = getModule(makeModuleMap(null, relMap));
            			
            			requireMod.skipMap = options.skipMap;
            
            			requireMod.init(deps, callback, errback, {
            				enabled: true
            			});
            
            			checkLoaded();
            		});
            
            		return localRequire;
                }
                return localRequire;
            }
            //xxxx
		}
        context.require = context.makeRequire(); //加载时的入口函数
        return context;
    }
    
    //3、定义require、define方法，导入data-main路径与进行模块加载
    req = requirejs = function (deps, callback, errback, optional) {
        //xxxx
        
        context = getOwn(contexts, contextName);  //获取默认环境
    	if (!context) {
    		context = contexts[contextName] = req.s.newContext(contextName); //创建一个名为'_'的环境名
    	}
    
    	if (config) {
    		context.configure(config);  //设置配置
    	}
    
    	return context.require(deps, callback, errback);
    }
    
    req.config = function (config) {
		return req(config);
	};
	
	s = req.s = {
		contexts: contexts,
		newContext: newContext
	};
	
    req({}); //初始化模块加载的上下文环境
    
    define = function (name, deps, callback) {
    
    }
    
    req(cfg); //加载data-main，主入口js
    
}(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));