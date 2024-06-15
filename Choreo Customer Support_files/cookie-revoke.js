function OptanonWrapper() {
    // Get initial OnetrustActiveGroups ids
    if(typeof OptanonWrapperCount == "undefined"){
        otGetInitialGrps();
    }
 
    //Delete cookies
    otDeleteCookie(otIniGrps);
 
    // Assign OnetrustActiveGroups to custom variable
    function otGetInitialGrps(){
        OptanonWrapperCount = '';
        otIniGrps =  OnetrustActiveGroups;
        //console.log("otGetInitialGrps", otIniGrps)
    }

 
    function otDeleteCookie(iniOptGrpId)
    {
        var otDomainGrps = JSON.parse(JSON.stringify(Optanon.GetDomainData().Groups));
        var otDeletedGrpIds = otGetInactiveId(iniOptGrpId, OnetrustActiveGroups);
        if(otDeletedGrpIds.length != 0 && otDomainGrps.length !=0){
            for(var i=0; i < otDomainGrps.length; i++){
                //Check if CustomGroupId matches
               if(otDomainGrps[i]['CustomGroupId'] != '' && otDeletedGrpIds.includes(otDomainGrps[i]['CustomGroupId'])){
                    for(var j=0; j < otDomainGrps[i]['Cookies'].length; j++){
                         //console.log("otDeleteCookie",otDomainGrps[i]['Cookies'][j]['Name'])
                        //Delete cookie
                        if(is_cookie(otDomainGrps[i]['Cookies'][j]['Name']) != -1){
                          eraseCookie(otDomainGrps[i]['Cookies'][j]['Name']);
                        }
                        
                    }
                }
 
                //Check if Hostid matches
                if(otDomainGrps[i]['Hosts'].length != 0){
                    for(var j=0; j < otDomainGrps[i]['Hosts'].length; j++){
                        //Check if HostId presents in the deleted list and cookie array is not blank
                        if(otDeletedGrpIds.includes(otDomainGrps[i]['Hosts'][j]['HostId']) && otDomainGrps[i]['Hosts'][j]['Cookies'].length !=0){
                            for(var k=0; k < otDomainGrps[i]['Hosts'][j]['Cookies'].length; k++){
                                //Delete cookie
                                if(is_cookie(otDomainGrps[i]['Hosts'][j]['Cookies'][k]['Name']) != -1){
                                  eraseCookie(otDomainGrps[i]['Hosts'][j]['Cookies'][k]['Name']);
                                }
                            }
                        }
                    }
                }
 
            }
        }
        otGetInitialGrps(); //Reassign new group ids
    }

      if(is_cookie('OptanonAlertBoxClosed') != -1){
        if(!otIniGrps.includes("C0002")){//no performance c 
            const removeCookies = ["wchutm", "wsutm", "internal_ip_region","country_code","ws_source","country_name","il_sl_region","ws_pspct",
            "il_country","region_code","il_pod","il_state","ai_user","il_region","il_region","il_su_region","_ga","_ga_GE8HSM4KGR","_gat_gtag_UA_103065_2","_gid", 
            "_gat_UA-103065-2", "_hjIncludedInSessionSample", "_hjAbsoluteSessionInProgress", "_hjSessionUser_153267","_hjFirstSeen", "_hjIncludedInPageviewSample", "_hjSession_153267"];
            removeCookies.forEach(revokeCookies);
              
        }
        if(!otIniGrps.includes("C0003")){//no functional c

        const removeCookies = ["drift_campaign_refresh","drift_aid","driftt_aid","visitor_id142131-hash",
        "visitor_id142131","pdsessionid"];
        removeCookies.forEach(revokeCookies);

        }
        if(!otIniGrps.includes("C0004")){//no targeting c

          const removeCookies = ["_fbp", "_gcl_au", "_uetvid","_uetsid","wsgclid","YSC","_GRECAPTCHA","li_gc","CONSENT","IDE","personalization_id",
          "bscookie","MUID","tuuid_lu","tuuid","lidc","lpv142131"];
          removeCookies.forEach(revokeCookies);
        }
        
      }

    function revokeCookies(cookiename){
      var ext_source = is_cookie(cookiename);
      if (ext_source != -1) {
        eraseCookie(cookiename);
      }
    }
    //Get inactive ids

    function otGetInactiveId(customIniId, otActiveGrp){
        //Initial OnetrustActiveGroups
        // console.log("otGetInactiveId",customIniId)
        customIniId = customIniId.split(",");
        customIniId = customIniId.filter(Boolean);
 
        //After action OnetrustActiveGroups
        otActiveGrp = otActiveGrp.split(",");
        otActiveGrp = otActiveGrp.filter(Boolean);
 
        var result=[];
        for (var i=0; i < customIniId.length; i++){
            if ( otActiveGrp.indexOf(customIniId[i]) <= -1 ){
                result.push(customIniId[i]);
            }
        }
        return result;
    }
 
    //Delete cookie
    function eraseCookie(name) {
        //Delete root path cookies
        domainName = window.location.hostname;
        document.cookie = name+'=; Max-Age=-99999999; Path=/;Domain='+ domainName;
        document.cookie = name+'=; Max-Age=-99999999; Path=/;';
 
        //Delete LSO incase LSO being used, cna be commented out.
        localStorage.removeItem(name);
    }
}