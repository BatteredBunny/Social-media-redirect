// ==UserScript==
// @name        Social media redirect
// @namespace   Violentmonkey Scripts
// @include     *://twitter.com/*
// @include     *://www.twitter.com/*
// @include     *://instagram.com/*
// @include     *://www.instagram.com/*
// @include     *://youtube.com/*
// @include     *://www.youtube.com/*
// @include     *://reddit.com/*
// @grant       none
// @version     1.1
// @author      ayes-web
// @description Userscript that redirects social media sites to privacy alternatives
// @homepageURL https://github.com/ayes-web/social-media-redirect/
// @downloadURL https://github.com/ayes-web/Social-media-redirect/raw/main/social-media-redirect.user.js
// @run-at document-start
// ==/UserScript==

// Enable/disable sites redirecting
var redirect_twitter = true;
var redirect_youtube = true;
var redirect_instagram = true;
var redirect_reddit = true;

// Change instances
var nitter_instance = "https://farside.link/nitter";
var bibliogram_instance = "https://farside.link/bibliogram";
var invidious_instance = "https://farside.link/invidious";
var reddit_instance = "https://farside.link/libreddit";

var site = window.location.hostname
var path = window.location.pathname

if (redirect_twitter && (site == "twitter.com" || site == "www.twitter.com")) {
  window.location.replace(nitter_instance + path)
} else if (redirect_instagram && (site == "instagram.com" || site == "www.instagram.com")) {
  window.location.replace(bibliogram_instance + path)
} else if (redirect_youtube && (site == "youtube.com" || site == "www.youtube.com")) {
  window.location.replace(invidious_instance + path)
} else if (redirect_reddit && (site == "reddit.com")) {
  window.location.replace(reddit_instance + path)
}
