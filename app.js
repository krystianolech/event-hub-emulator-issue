import { EventHubProducerClient } from "@azure/event-hubs";

console.log("start");

const producerClient = new EventHubProducerClient(
  process.env.EVENT_HUB_CONNECTION_STRING ||
    "Endpoint=sb://localhost;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=SAS_KEY_VALUE;EntityPath=eh1;UseDevelopmentEmulator=true;"
);

for (let i = 0; i < 10; i++) {
  await producerClient.sendBatch([{ body: { msg: "testEvent" } }]);
  console.log(`sent event ${i}`);
}

console.log("done");

await producerClient.close();
