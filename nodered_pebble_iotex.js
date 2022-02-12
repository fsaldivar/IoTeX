msg.topic='Pebble';
var temperature = msg.payload.pebble_device_record[0].temperature;
var latitude = msg.payload.pebble_device_record[0].latitude;
var longitude = msg.payload.pebble_device_record[0].longitude;
var humidity = msg.payload.pebble_device_record[0].humidity;
var pressure = msg.payload.pebble_device_record[0].pressure;
var gas_resistance = msg.payload.pebble_device_record[0].gas_resistance;
var vbat = msg.payload.pebble_device_record[0].vbat;
var light = msg.payload.pebble_device_record[0].light;
var snr = msg.payload.pebble_device_record[0].snr;
var timestamp = msg.payload.pebble_device_record[0].timestamp;


msg.payload = '{ ' + '"temperature":' +temperature + ','+ '"latitude":' + latitude +  ','+ '"longitude":' + longitude +  
','+ '"humidity":' + humidity +    
','+ '"pressure":' + pressure +   
','+ '"gas_resistance":' + gas_resistance +   
','+ '"vbat":' + vbat +   
','+ '"light":' + light +   
','+ '"snr":' + snr +  
','+ '"timestamp_pebble":' + timestamp +   

' }'  ;
return msg ;
