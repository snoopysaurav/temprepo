const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/sub-content/first.txt", "utf-8");
    const second = await readFile("./content/sub-content/second.txt", "utf-8");
    await writeFile(
      "./content/sub-content/result-mind-grenade.txt",
      `This is awesome : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
