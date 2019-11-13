const APM = require(`elastic-apm-node`);
APM.start({
    metricsInterval: 0,
    metricsLimit: 100,
    serviceName: `mem-leak`,
    serverUrl: `http://localhost:8200`,
});

const express = require(`express`);
const http = require(`http`);

const app = express();
app.get(`/test`, (req, res) => {
    res.json({
        ok: true,
    });
});


http.createServer(app).listen(3812, () => {
    console.log(`server is started`);
});

