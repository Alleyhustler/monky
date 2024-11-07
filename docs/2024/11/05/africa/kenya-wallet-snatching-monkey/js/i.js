(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome|snap-prefetch|remotasks|woorank|uptime\.com|facebookexternalhit|facebookcatalog/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":7291,"name":"CNN Edition","cookie_name":"bounceClientVisit7291","domain":"edition.cnn.com","ct":"bind_to_domain","ally":0,"ei":0,"tcjs":"","cjs":"","force_https":false,"waypoints":false,"content_width":900,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":1,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"ffs":"UID2","mas":2,"map":1,"gar":true,"ete":2,"ettm":true,"etjs":"","dge":true,"bxidLoadFirst":false,"pie":false,"cme":false,"gbi_enabled":1,"bpush":false,"pt":null,"els":{"endcap":"body:not([data-page-type=\"article\"]) .layout__bottom, body[data-page-type=\"article\"] .layout__end","masthead":".ad-slot-header__container, #ad_bnr_atf_01:not(.ad-slot-header__container #ad_bnr_atf_01)"},"vars":[{"name":"optimizely_present","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.user-account-reg-wall').length > 0;","trigger":"pageload"},{"name":"dfp2_detect","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\r\n    if (!bouncex.dfpRan) {\r\n        bouncex.dfpRan = true;\r\n        return 'not_ready';\r\n    }\r\n    function check() {\r\n        bouncex.dfp_loaded = false || bouncex.dfp_loaded;\r\n        \r\n        var event = bouncex.gbi2.getDfpEndPageViewEvent();\r\n        \r\n        if (event && event.dfp_status) {\r\n            if (event.dfp_status == 'pending') {\r\n                return 'not_ready';\r\n            } \r\n            \r\n            bouncex.dfp_loaded = true;\r\n\r\n            if (event.dfp_status == 'suppressed') {\r\n                return 'sponsor';\r\n            }\r\n\r\n            return 'allow';\r\n        }\r\n\r\n        return 'not_ready';\r\n    }\r\n\r\n    if (bouncex.website.gbi.rblocks) {\r\n        if (!bouncex.website.gbi_enabled) {\r\n            return 'disabled';\r\n        } else if (bouncex.dfp_loaded) {\r\n            return null;\r\n        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady && bouncex.gbi2) {\r\n            return check();\r\n        } else if (typeof window.googletag === 'undefined') {\r\n            return 'no_googletag';\r\n        }\r\n        return 'fallback';\r\n    } else {\r\n        return 'not_ready';\r\n    }\r\n})()","trigger":"pageload"},{"name":"special_article","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"special_article","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":1,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":"","enabled":0},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":true,"gamNetwork":"8663477","spa":0,"spatm":1,"preinit_cjs":"","crs":{"integrations":null,"pageCount":null},"mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":true,"fmc":["AX","AL","AD","AM","AT","AZ","BY","BE","BA","BG","HR","CY","CZ","DK","EE","EU","FO","FI","FR","GI","GG","GE","DE","GR","HU","IM","IS","IE","IT","JE","LV","LI","LT","LU","MT","MD","MC","ME","NL","MK","NO","PL","PT","RO","SM","RS","SK","SI","ES","SJ","SE","CH","UA","GB","VA","US","CA"],"fme":true,"fmx":"","uid2":true,"sdk":{"android":{"enabled":false,"enabledVersions":[],"eventModifications":null},"ios":{"enabled":false,"enabledVersions":[],"eventModifications":null}},"onsite":{"enabled":1},"ads":{"enabled":1},"pubs":{"enabled":1},"websdk":{"enabled":0,"devMode":0},"ga4_property_id":"","ga4_measurement_id":"","tag_state_domain":"api.bounceexchange.com"}
;

		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 1
		};
		bouncex.assets = {"ads":"7b352b1295e35e9c90089d9dd48e488f","creativesBaseStyles":"a53944a2","gam_8663477":"//assets.bounceexchange.com/assets/gam/8663477/ca38109d8ed0b6d8e1d1aeb0a45b5f89.json","gpsAuction":"bbb80866120d17013073bb6d284cbd6b","inbox":"75060a85c1a4aebcc6f779b9e84db722","onsite":"abbdf7a49be9b52b097917b7b527b262","sms":"e39203556bab2366e56296ce42e974a7","websdk":"04cde0014774b7eb597770595769aab1"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}

		var runtime = document.createElement('script');
		runtime.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/runtime_c81e76ee00d795b1eebf8d27949f8dc5.br.js');
		runtime.setAttribute('async', 'async');

		bouncex.initializeTag = function() {
			var script = document.createElement('script');
			script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/main-v2_e09343dd04d7b7bcfa02231dd6dc80d7.br.js');
			script.setAttribute('async', 'async');
			document.body.appendChild(script);


			var deviceGraphScript = document.createElement('script');
			deviceGraphScript.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/cjs_min_6ef1802500d8367a80105e664862d0d7.js');
			deviceGraphScript.setAttribute('async', 'async');
			var dgAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"},{"Key":"data-adcb","Value":"bouncex.dg.getAdsOptStatus"}];
			if (dgAttrs) {
				for (var i = 0; i < dgAttrs.length; i++) {
					deviceGraphScript.setAttribute(dgAttrs[i].Key, dgAttrs[i].Value);
				}
			}
			document.body.appendChild(deviceGraphScript);

			bouncex.initializeTag = function() {};
		};

		runtime.onload = bouncex.initializeTag;
		document.body.appendChild(runtime);

	}


}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();