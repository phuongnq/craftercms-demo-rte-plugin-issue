(function () {

  'use strict';

  tinymce.PluginManager.add("my_split_button", function (editor, url) {

    function _onAction()
    {
      // Write something in the RTE when the plugin is triggered
      alert("this is a test");
    }

    // Define the Toolbar button
    editor.ui.registry.addSplitButton('my_split_button', {
        text: "My Split Button",
        onAction: _onAction,
        fetch: function (callback) {
          var items = [
            { type: 'menuitem', text: 'Left', onAction: function() { /* align left */ }},
            { type: 'menuitem', text: 'Center', onAction: function() { /* align center */ }},
            { type: 'menuitem', text: 'Right', onAction: function() { /* align right */ }}
          ];
          callback(items);
        },
        onItemAction(api, item) {
          console.log(api, item);
      }
    });
  });

  // Return details to be displayed in TinyMCE's "Help" plugin, if you use it
  // This is optional.
  return {
    getMetadata: function () {
      return {
        name: "My Split Button example",
        url: "http://exampleplugindocsurl.com"
      };
    }
  };
})();