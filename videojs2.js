/*! @name @youon/videojs-replayforward @version 1.0.1 @license MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
  typeof define === 'function' && define.amd ? define(['video.js'], factory) :
  (global.videojsReplayforward = factory(global.videojs));
}(this, (function (videojs) { 'use strict';

  videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var version = "1.0.1";

  var Button = videojs.getComponent('Button'); // eslint-disable-line

  /**
   * The initial play button that shows before the video has played. The hiding of the
   * `BigPlayButton` get done via CSS and `Player` states.
   *
   * @extends Button
   */

  var ReplayButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(ReplayButton, _Button);

    /**
     * The constructor
     *
     * @param {Player} player
     *        The `Player` that this class should be attached to.
     *
     * @param {Object} [options]
     *        Object of option names and values.
     */
    function ReplayButton(player, options) {
      var _this;

      _this = _Button.call(this, player, options) || this;
      _this.secs_ = -10;
      return _this;
    }
    /**
     * Builds the default DOM `className`.
     *
     * @return {string}
     *         The DOM `className` for this object. Always returns 'vjs-big-play-button'.
     */


    var _proto = ReplayButton.prototype;

    _proto.buildCSSClass = function buildCSSClass() {
      // return 'vjs-pip-button';
      return "vjs-replay-10-control " + _Button.prototype.buildCSSClass.call(this);
    };
    /**
     * This gets called when a `BigPlayButton` "clicked". See {@link ClickableComponent}
     * for more detailed information on what a click can be.
     *
     * @param {EventTarget~Event} event
     *        The `keydown`, `tap`, or `click` event that caused this function to be
     *        called.
     *
     * @listens tap
     * @listens click
     */


    _proto.handleClick = function handleClick(event) {
      var time = this.player().currentTime() + this.secs_;

      if (time < 0) {
        time = 0;
      }

      this.player().currentTime(time);
    };

    return ReplayButton;
  }(Button);
  /**
   * The text that should display over the `BigPlayButton`s controls.
   * Added to for localization.
   *
   * @type {string}
   * @private
   */


  ReplayButton.prototype.controlText_ = 'Replay Button';

  var Button$1 = videojs.getComponent('Button'); // eslint-disable-line

  /**
   * The initial play button that shows before the video has played. The hiding of the
   * `BigPlayButton` get done via CSS and `Player` states.
   *
   * @extends Button
   */

  var ForwardButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(ForwardButton, _Button);

    /**
     * The constructor
     *
     * @param {Player} player
     *        The `Player` that this class should be attached to.
     *
     * @param {Object} [options]
     *        Object of option names and values.
     */
    function ForwardButton(player, options) {
      var _this;

      _this = _Button.call(this, player, options) || this;
      _this.secs_ = 10;
      return _this;
    }
    /**
     * Builds the default DOM `className`.
     *
     * @return {string}
     *         The DOM `className` for this object. Always returns 'vjs-big-play-button'.
     */


    var _proto = ForwardButton.prototype;

    _proto.buildCSSClass = function buildCSSClass() {
      return "vjs-forward-10-control " + _Button.prototype.buildCSSClass.call(this);
    };
    /**
     * This gets called when a `BigPlayButton` "clicked". See {@link ClickableComponent}
     * for more detailed information on what a click can be.
     *
     * @param {EventTarget~Event} event
     *        The `keydown`, `tap`, or `click` event that caused this function to be
     *        called.
     *
     * @listens tap
     * @listens click
     */


    _proto.handleClick = function handleClick(event) {
      var time = this.player().currentTime() + this.secs_;

      if (time < 0) {
        time = 0;
      }

      this.player().currentTime(time);
    };

    return ForwardButton;
  }(Button$1);
  /**
   * The text that should display over the `BigPlayButton`s controls.
   * Added to for localization.
   *
   * @type {string}
   * @private
   */


  ForwardButton.prototype.controlText_ = 'Forward Button';

  var Plugin = videojs.getPlugin('plugin');
  var Component = videojs.getComponent('Component'); // Default options for the plugin.

  var defaults = {}; // Register the Components

  Component.registerComponent('ReplayButton', ReplayButton);
  Component.registerComponent('ForwardButton', ForwardButton);
  /**
   * An advanced Video.js plugin. For more information on the API
   *
   * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
   */

  var Replayforward =
  /*#__PURE__*/
  function (_Plugin) {
    _inheritsLoose(Replayforward, _Plugin);

    /**
     * Create a Replayforward plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function Replayforward(player, options) {
      var _this;

      // the parent class will add player under this.player
      _this = _Plugin.call(this, player) || this;
      _this.options = videojs.mergeOptions(defaults, options);

      _this.player.ready(function () {
        _this.player.addClass('vjs-replayforward');
      });

      return _this;
    }

    return Replayforward;
  }(Plugin); // Define default values for the plugin's `state` object here.


  Replayforward.defaultState = {}; // Include the version number.

  Replayforward.VERSION = version; // Register the plugin with video.js.

  videojs.registerPlugin('replayforward', Replayforward);

  return Replayforward;

})));