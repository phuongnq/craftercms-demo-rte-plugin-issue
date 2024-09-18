(function () {

  'use strict';

  tinymce.PluginManager.add("my_button", function (editor, url) {

    function _onAction()
    {
      // Write something in the RTE when the plugin is triggered
      alert("this is a test");
    }

    // Define the Toolbar button
    editor.ui.registry.addButton('my_button', {
        text: "My Button",
        onAction: _onAction
    });
  });

  tinymce.PluginManager.add("my_split_button", function (editor, url) {

    function _onAction()
    {
      // Write something in the RTE when the plugin is triggered
      alert("this is a test");
    }

    // Define the Toolbar button
    editor.ui.registry.addSplitButton('my_split_button', {
        text: "My Split Button",
        onAction: _onAction
    });
  });

  // Return details to be displayed in TinyMCE's "Help" plugin, if you use it
  // This is optional.
  return {
    getMetadata: function () {
      return {
        name: "My Button example",
        url: "http://exampleplugindocsurl.com"
      };
    }
  };
})();