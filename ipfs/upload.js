async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "My First NFT",
      attributes: [
        {
          trait_type: "Maine",
          value: "10",
        },
        {
          trait_type: "Hiking",
          value: "100",
        },
        {
          trait_type: "Web3",
          value: "1000",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmeL42v5UnLBiMqKPdMQTZi4RV7LGri25SPX3BzpgAzYg5",
      description: "Acadia Hiking Shenanigans",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
