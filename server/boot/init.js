module.exports = function init(server) {
  var PortCall = server.models.PortCall;

  var portCalls = [
    {id:1, vessel: "USS Harpoon", routeId: 1, port: "HKHKG", eta: "2016-01-01 00:00:00", etd: "2016-01-03 00:00:00"},
    {id:2, vessel: "USS Harpoon", routeId: 1, port: "SGSIN", eta: "2016-01-06 00:00:00", etd: "2016-01-09 00:00:00"},
    {id:3, vessel: "USS Harpoon", routeId: 1, port: "USLAX", eta: "2016-01-12 00:00:00", etd: "2016-01-15 00:00:00"},
    {id:4, vessel: "USS Harpoon", routeId: 1, port: "USOAK", eta: "2016-01-18 00:00:00", etd: "2016-01-21 00:00:00"},
    {id:5, vessel: "USS Starboard", routeId: 2, port: "HKHKG", eta: "2016-01-02 00:00:00", etd: "2016-01-04 00:00:00"},
    {id:6, vessel: "USS Starboard", routeId: 2, port: "USLAX", eta: "2016-01-06 00:00:00", etd: "2016-01-08 00:00:00"},
    {id:7, vessel: "USS Starboard", routeId: 2, port: "USOAK", eta: "2016-01-10 00:00:00", etd: "2016-01-12 00:00:00"},
    {id:8, vessel: "USS Starboard", routeId: 2, port: "SGSIN", eta: "2016-01-14 00:00:00", etd: "2016-01-16 00:00:00"},
    {id:9, vessel: "USS Starboard", routeId: 2, port: "HKHKG", eta: "2016-01-18 00:00:00", etd: "2016-01-20 00:00:00"},
    {id:10, vessel: "USS Starboard", routeId: 2, port: "USLAX", eta: "2016-01-22 00:00:00", etd: "2016-01-24 00:00:00"},
    {id:11, vessel: "HMS Port", routeId: 3, port: "USOAK", eta: "2016-01-10 00:00:00", etd: "2016-01-15 00:00:00"},
    {id:12, vessel: "HMS Port", routeId: 3, port: "HKHKG", eta: "2016-01-20 00:00:00", etd: "2016-01-25 00:00:00"},
    {id:13, vessel: "HMS Port", routeId: 3, port: "SGSIN", eta: "2016-01-30 00:00:00", etd: "2016-02-05 00:00:00"},
    {id:14, vessel: "USS Harpoon", routeId: 4, port: "USOAK", eta: "2016-01-21 00:00:00", etd: "2016-01-24 00:00:00"},
    {id:15, vessel: "USS Harpoon", routeId: 4, port: "USLAX", eta: "2016-01-25 00:00:00", etd: "2016-01-27 00:00:00"},
    {id:16, vessel: "USS Harpoon", routeId: 4, port: "HKHKG", eta: "2016-01-28 00:00:00", etd: "2016-01-30 00:00:00"},
    {id:17, vessel: "USS Harpoon", routeId: 4, port: "SGSIN", eta: "2016-02-01 00:00:00", etd: "2016-02-03 00:00:00"},
  ];

  PortCall.create(portCalls, function(err, result) {
    if (err) console.log(err);
    console.log("Done importing initial port call data!");
  });
};
