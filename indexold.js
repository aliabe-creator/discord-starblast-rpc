const RPC = require('discord-rpc');
const pinger = require("starblast-pinger");
const client = new RPC.Client({
    transport: 'ipc'
});

function mode() {
  return new Promise((resolve) => {
     pinger.getSystemInfo(process.argv[2]).then(res => {
        resolve([res.name,res.region,res.mode.id]);
     });
  });
}

client.on('ready', () => {
    mode().then(res => {
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: "System: " + res[0],
                state: res[1] + " ~ " + res[2][0].toUpperCase() + res[2].substring(1) + " Mode",
                timestamps: {
                    start: Date.now()
                },
                assets: {
                    large_image: "starblast-poster", // large image key from developer portal > rich presence > art assets
                    large_text: "Starblast Cover Image"
                },
                buttons: [
                    { label: "Join system", url: process.argv[2] },
                    { label: "dmitron's ServerList+", url: "https://starblast.dankdmitron.dev/" }
                ]
            }
        });
    })
});

client.login({
    clientId: '', // put the client id from the dev portal here
});
