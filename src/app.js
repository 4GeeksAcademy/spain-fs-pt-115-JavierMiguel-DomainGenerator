import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  //- Arrays with values tu merge -

  //Challenge One Extensions
  const extensions = ['.com', '.info', '.net', '.org', '.biz', '.edu', '.io'];

  const pronouns = ["the", "our"];
  const adjs = ["great", "big"];
  const nouns = ["jogger", "racoon"];

  console.log("--- CHALLENGE ONE WITH EXTENSIONS ---");

  // FlatMap function isn't usefull in this case, I don't need the array only the print in console.
  pronouns.map(
    (pronoun) => adjs.map(
      (adj) => nouns.map(
        (noun) => extensions.map(
          (extension) => console.log(`${pronoun}${adj}${noun}${extension}`)
        )
      )
    )
  );

  // -- EXPECTED RESULT --
  // thegreatjogger.com
  // thegreatracoon.com
  // ourgreatjogger.com
  // ourgreatracoon.com
  // thebigjogger.com
  // thebigracoon.com
  // ourbigjogger.com
  // ourbigracoon.com


  //Challenge Two DomainHacks

  console.log("--- CHALLENGE TWO WITH DOMAIN HACKS ---");

  // Words ended with "com" -> Telecom, Excom, Mocom, Phocom
  // Words ended with "es"  -> Abarrotes, Carnes, Cazadores, Champiñones
  // Words ended with "net" -> Carnet, Baronet, Internet, Subnet

  const domainNames = ['Telecom', 'Pedernal', 'Abarrotes', 'Brioche', 'Carnet', 'Trotar'];
  const domainExtensions = ['com', 'es', 'net'];

  domainNames.map((dName) =>
    domainExtensions.map((dExtension)=>
      {
        let slicedWord = dName;
        
        (dName.endsWith(dExtension)) ? slicedWord = dName.slice(0, -dExtension.length) : slicedWord = dName;

        console.log(`${slicedWord}.${dExtension}`);
        
      }
    )
  );
  
};
