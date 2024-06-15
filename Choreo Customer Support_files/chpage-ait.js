$(document).ready(function () {
   if (typeof appInsights_w != "undefined") {
      $(".cSInGoogle").click(function () {
         var azureData = {}; azureData = { type: "Google" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'sign in button click', properties: customAzureProperties });
      });

      $(".cSInGitHub").click(function () {
         var azureData = {}; azureData = { type: "Github" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'sign in button click', properties: customAzureProperties });
      });

      $(".cSUpGoogle").click(function () {
         var azureData = {}; azureData = { type: "Google", signup_location: "choreo-site-top" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'sign up button click', properties: customAzureProperties });
      });

      $(".cSUpGitHub").click(function () {
         var azureData = {}; azureData = { type: "Github", signup_location: "choreo-site-top" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'sign up button click', properties: customAzureProperties });
      });

      $(".cGuest").click(function () {
         var azureData = {}; azureData = { type: "Anonymous Access", signup_location: "choreo-site-top" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'sign up button click', properties: customAzureProperties });
      });

      //Bottom links
      $(".cSUpGoogleBot").click(function () {
         var azureData = {}; azureData = { type: "Google", signup_location: "choreo-site-footer" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'sign up button click', properties: customAzureProperties });
      });

      $(".cSUpGitHubBot").click(function () {
         var azureData = {}; azureData = { type: "Github", signup_location: "choreo-site-footer" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'sign up button click', properties: customAzureProperties });
      });

      $(".cGuestBot").click(function () {
         var azureData = {}; azureData = { type: "Anonymous Access", signup_location: "choreo-site-footer" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'sign up button click', properties: customAzureProperties });
      });

      //demo button
      $(".trDemoMenu").click(function () {
         var azureData = {}; azureData = { demo_location: "choreo-site-menu" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'demo button click', properties: customAzureProperties });
      });
      $(".trDemoPage").click(function () {
         var azureData = {}; azureData = { demo_location: "choreo-site-page" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'demo button click', properties: customAzureProperties });
      });
      $(".trDemoFooter").click(function () {
         var azureData = {}; azureData = { demo_location: "choreo-site-footer" };
         Object.assign(customAzureProperties, azureData); appInsights_w.trackEvent({ name: 'demo button click', properties: customAzureProperties });
      });
   }
});