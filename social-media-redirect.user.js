// ==UserScript==
// @name        Social media redirect
// @namespace   Violentmonkey Scripts
// @include     *://twitter.com/*
// @include     *://www.twitter.com/*
// @include     *://instagram.com/*
// @include     *://www.instagram.com/*
// @include     *://youtube.com/*
// @include     *://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      ayes-web
// @description Userscript that redirects social media sites to privacy alternatives
// @homepageURL https://github.com/ayes-web/social-media-redirect/
// @downloadURL https://github.com/ayes-web/social-media-redirect/raw/master/social-media-redirect.user.js
// @run-at document-start
// ==/UserScript==

// Enable/disable sites redirecting
var redirect_twitter = true
var redirect_youtube = true
var redirect_instagram = true

// Change instances
var nitter_instance = "https://nitter.snopyta.org"
var bibliogram_instance = "https://bibliogram.snopyta.org"
var invidious_instance = "https://invidious.snopyta.org"

var site = window.location.hostname
var path = window.location.pathname

if (redirect_twitter && (site == "twitter.com" || site == "www.twitter.com")) {
  window.location.replace(nitter_instance + window.location.pathname)
} else if (redirect_instagram && (site == "instagram.com" || site == "www.instagram.com")) {
  window.location.replace(bibliogram_instance + window.location.pathname)
} else if (redirect_youtube && (site == "youtube.com" || site == "www.youtube.com")) {
  window.location.replace(invidious_instance + window.location.pathname)
}