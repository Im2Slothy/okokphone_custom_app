lua54 'yes'
fx_version 'cerulean'
game 'gta5'

author 'Im2Slothy#0'
description 'TESTAPP'

shared_scripts {
      "init.lua"
}

client_scripts {
      'client/utils.lua', -- This contains utility functions, so it should start first
      'client/client.lua'
}

server_scripts {
      'server/utils.lua', -- This contains utility functions, so it should start first
      'server/server.lua'
}

ui_page 'web/app.html'

files {
      'web/**/*'
}
