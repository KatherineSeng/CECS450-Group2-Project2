// https://observablehq.com/@pikakashi/untitled@466
import define1 from "./7764a40fe6b83ca1@413.js";
import define2 from "./368459df18c17371@28.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["p16_Graph.json",new URL("./files/bf5c5e650ed9fd99813a4f89d02c138ed91b85eeb0fe6018f03108916267ed12f8d9bf6997ef4096bedb8731cf3972b6bd82732613b5bae14edbaed630d85f9c",import.meta.url)],["p35_Tree.json",new URL("./files/82c7a6ce98642ffb48e2e86745e0b4f952b0757d9c5f7939a92d4c12ec3f781d599d9b9e70ce6c1dfff05f898a5e381b2a54787f06c84aad7ae0e4006235e89f",import.meta.url)],["p34_Tree.json",new URL("./files/17ca41b7320142ee0b52d4a20bb92c91127abe732d67a8251fa2d4faa1708c90440e75d5df1a2e676ecd5fd86df1e4e7f1a531ae94d982828664183acda74b24",import.meta.url)],["p33_Tree.json",new URL("./files/57676bf3563d552509414a8600407a5c2e4dca58c7bc5ba5e10c9833a8ead0c63f1e0b2b01073dfdc542b7448287b803810727d1f6066a22d307bf663abe3716",import.meta.url)],["p32_Tree.json",new URL("./files/b51cd891280499cd6abfeb0403ab489a4512e407b42bae54f3843c6cf650ad06bc57c701cabfca488fb0b899b898aaf8b9d189bb94f05b5ffe19a5d3049bfd6e",import.meta.url)],["p31_Tree.json",new URL("./files/b4bd6ff9c37f8b65dd24e91854aae755b083ad35f7130b6259186a359e18ce9903c9eb207587f5ac8ecba558985d657e7bc598172f574fb550e60545f0a8a34f",import.meta.url)],["p30_Tree.json",new URL("./files/fd50336abb247f0a55b9c9ee82ea95f10a649202d859521bb4ea685dbccb241aa53d739727e5e8270cf6b4e0a6ecc5f8d7b6ec9060121e5c975e9ad1db968d3d",import.meta.url)],["p28_Tree.json",new URL("./files/61c5fc43225801b74afe24511514023016a0f8653ef07bc9cc095e9dcce4f631c5e3e05534a8ce4b8c4a198844b8490efc090a96cabca06da0e737a042f0ed40",import.meta.url)],["p27_Tree.json",new URL("./files/8e0940618602c50fcc2eb2a5604459ce5cb1ec7e42b2415ab5dc9ade835e19165d5e43682dd9258cb46982be9dd854ac939823cd8d1924ff3f633d686b0c9db7",import.meta.url)],["p25_Tree.json",new URL("./files/dc3c594658b027eb283685bd8d95b14a14f1ba8befdf944c3514e2e20ab464051160d8a7924e65340cd89062907b7161a5c71f502e4348e90df0004224748463",import.meta.url)],["p24_Tree.json",new URL("./files/16083af89f3b6e68823e8858194c9a3c9be796b1cc6ff970d536088b42e12a3a3a52f75235b559754d8b70cf28b7eba4d67d14c4a38c470ab73815df452c34d2",import.meta.url)],["p23_Tree.json",new URL("./files/9fee0451c433e7a4f02b8c90942c44271c0a3ebc4a8cfa2e21e39829ebe20e93939963b186b9478340c095b459b11e3cb373968dac794ca689030f829d4b90fb",import.meta.url)],["p21_Tree.json",new URL("./files/baf3d9dd548efe8b4ca34461a3c94c1b54a1d200051545c555dc425f925eba2ce19e733d3aac04d3c829e74a144c5df3f6fc64b2d2f92fe87481af634a469c02",import.meta.url)],["p20_Tree.json",new URL("./files/b96a619d4b11e6c908f197ae1401677992a7dbee8b6928a9d4c83388e2f0c50427e91e1275f4eb994999a8a16b0ea716f36bd76515c64764f41caf753e82cd64",import.meta.url)],["p19_Tree.json",new URL("./files/cbb8f8ce49e577a04490c25f26d400a58437b513cf8cd47fe668185a6748ec9699fae05b4c72ebdc04956d99e241dd3104af09b0372a5e74271b461b6b8f4f5e",import.meta.url)],["p18_Tree.json",new URL("./files/8cb2e61edccb3258eb2672d702cef41d0416dd954c87a6daa2674b9911c0e89280cdf922cbf63af2cc564ff674fe4ed612c22aec50dc801a24feb6b2cbeb17e7",import.meta.url)],["p17_Tree.json",new URL("./files/285a356560215215f126cb90f66f09ab444ad89a91aa20cb23eefbed7e805cd2c73a66ccd661025f069444fcba47f0fb48f202516239e164c4e2a1bf7739cd29",import.meta.url)],["p16_Tree.json",new URL("./files/0af808ab99296af19e1b1124459d6e28b1c6e60670536730163a0f7e7b33c7a9ff762768df1df5096d856daf1ebc1d65d888f4a75781f56e46a5e59db57b72c1",import.meta.url)],["p15_Tree.json",new URL("./files/1f4a8e053401865c2e1c0acfe028cf8c1c6123767538f29b4f819bfea902273420c7f34ef0182d6f76ab7c07d6c8773d98a161f14484af95665dceea63e9dab0",import.meta.url)],["p14_Tree.json",new URL("./files/b5159ecb62ec821e2e8a46f340455262fe9b607390a796be946023b325a67980ebf68b0983a879d6d6dd518e4c65d311a267242b4243a915a973c56b78702c26",import.meta.url)],["p13_Tree.json",new URL("./files/f29d7a96a496a9675c7f9eb95d9345047462db1ae744c8511c2e3d4ed13a3be15bc81307cce92111aaea274226ef1722b4a6dff76ef36d057f9f04cdc2a04760",import.meta.url)],["p12_Tree.json",new URL("./files/bbe7a77cb77d044cf7e610fd754b0f00683d078e5e297dcc57775cf77d921e5fcca475c6f35194daaa6478a4150dba84a5cac155fa94a8f7425f8be4c2850ae5",import.meta.url)],["p11_Tree.json",new URL("./files/6d86626a43f5489c0b64e3e432d25d5ec25924aef0fbce2f0a28c64e1711291be8799eccb63e7af4d1e7fa1282ffe216f3d049073f9bebcaa4017c6516a99642",import.meta.url)],["p10_Tree.json",new URL("./files/23a6e7752c403c26868f28710af0415daaa1c3e9cd6d66e0a35dd364ae236dc4736b3fd8b3b701591435f8c6ac7a052e59007c1e330a2263ae2e34c025cc26ea",import.meta.url)],["p7_Tree.json",new URL("./files/121c8f7889060e1a1bb084ca8bef7a3387cfca0b27a428255261e81911553d843c354bdf532beef88bf9298aa75d8ae9504d38b43bcf6838676e62b2c74c9d90",import.meta.url)],["p6_Tree.json",new URL("./files/f73061ef3077f834389b601b6866bf88aeba650a77426e110199ff8013d93e11fea5b79b684555a8660e581852595c1796e838fa595c325cf7cfc63f6f363317",import.meta.url)],["p5_Tree.json",new URL("./files/0edb0766ecfb92a43ef48256fff0740e04137613ec394c483ce9e9e738c5213fa9b56b90b62e67f09260dd7623296f2de7dba70a12674892397327b2da37adb6",import.meta.url)],["p4_Tree.json",new URL("./files/cf41e720ad26269b5901e70a03ba92050afe4f6559afcdddefbe74fbf32035caa473eaef55b147356c16dbbcb5fef00d3e70c7fa870d01944f54ac7638274558",import.meta.url)],["p3_Tree.json",new URL("./files/f65681881707da0f7eb589c1c0d24dbd288fb9d7930e8c020775f6cf7db68833cd5c332a1674f0b45cddf5714d6e343a248ec032fe98b61de7413b795f714d67",import.meta.url)],["p2_Tree.json",new URL("./files/ee0467e3301482383f41d0db4b464c95f00274dc581d94d21f9747cba3b168cbdde0cf906c225cb37f3b165c608f7b8d0a3e78ff2e8e14493d94d28e26f97d6d",import.meta.url)],["p1_Tree.json",new URL("./files/0f8d64d0827566e8f79b99e198186684ce6d4eb1749b54a3fb07fed8ca79f860f095ec034c9fe4421042b1a2c80c7dbf88273475e70feda5faf38b53d0d3c954",import.meta.url)],["p35_Graph.json",new URL("./files/27905ae2356eb931922ad9a96e991e59033531dcd94ad6359342957e82fa9e25ca1d872035f17a7c0133705b8eaad8246fc0e09df7a5e9a90f58d5799461de9c",import.meta.url)],["p34_Graph.json",new URL("./files/6d0db15df79f21d2ceaa1d73a1937bd42942afa363da89268f3b7560c24861404fd66e1ce8e9e93717c1eab2d4b6e53bc5f2dcfdc2fd93d279dafad431c6a23d",import.meta.url)],["p33_Graph.json",new URL("./files/41b0fcdfafae3acab5e9249160abb451741a91a95c5ee8f06831d70a569b1fe93f6cde8ac4f09b209e34d8a308034d56b402ced0072da766e524ef0c300f5c66",import.meta.url)],["p32_Graph.json",new URL("./files/91ec898e590605384f7710332844f567a4b2df35a934b3cae554a4cb63db1dc755a6b2f611773a6be62d2a0e222d0a5d9ec05f0124bc518072529e3f39af6c57",import.meta.url)],["p31_Graph.json",new URL("./files/085ecfc2add77d934c5535c857ee90baffda6e1ade61b6479777db969d2b8211a75fe9ad6cf86638c3e5b872baa27c32cd63893f401dd0f949296ac15f0a9e25",import.meta.url)],["p30_Graph.json",new URL("./files/287d13ee85924bf28b60c40d9218a0d4165afa10ec6c14cdca4e30000b15ca8df99e40d5b86b049db32d9a1eccbd5994da8710b6f242ed7e7d0be57b10fb60f4",import.meta.url)],["p28_Graph.json",new URL("./files/0540127f87b98869966a95a37ae185235c83f512259acabfb02fb551cc88ae167ed258ac63e166962c6ac04e750d34cadf2814dc725b3b6c416234657cf39665",import.meta.url)],["p27_Graph.json",new URL("./files/75b803238492c750542b50335ef5efd83013329793975b231d2f7899c886ab6dea5dccb0bc5afe7a56c6b540226da58e16673b5c2bda68146aae08aff24f7aad",import.meta.url)],["p25_Graph.json",new URL("./files/e28337dd966a1df24bbc524c7c7d0633359f79cecf9ccce25e6e1469768e61d078d7ec59c1786369786c1c191780feb9c8f5029a77ceab26f9d53dbce3f5e6c3",import.meta.url)],["p24_Graph.json",new URL("./files/3f85aa03e58ed4354da2be043d9420835ed1de03c3d9727605845e8511c5507345f4e521c6597ea03019b536c3bea5625317e0ee250bae01ccd4fb9cb3d46893",import.meta.url)],["p23_Graph.json",new URL("./files/c6e187ce11d7f97391639fff9b3f98def9bf011da53165cf30b6fb8f834300e70e9ac8e825eb62e34fe159095555cbdbe33972fe6157a54b1e5908745be6152b",import.meta.url)],["p21_Graph.json",new URL("./files/f0dd019ea40afed367ecda4cb9f0410299c2601b63ac1167b4456af8f47df4a1385cdc5c77fb3a1360f2d1f11cc00f05e43ae42a5cafe5f529823fb4ea3f2cfd",import.meta.url)],["p20_Graph.json",new URL("./files/05ca76ed08477b9b738a3c1610ce1aebdd911268da03c1ea0bf6d821a64c32b142fc4f553f74394b7359a410f2a83d203bd4c5ac341676b966d934bc3106c914",import.meta.url)],["p19_Graph.json",new URL("./files/d7c1093af89fd4a7e7b32f057858d9ece191ed1a25d0a4b9e423abe071a2f297375e2059e0942ce572d227e9b2257a721c95002cd5ba0f00f71594502e75699b",import.meta.url)],["p18_Graph.json",new URL("./files/7633582a231567571757f38c6d110b3c60eea21dcae58865e0590636402f4bc85a6ed85cc984049f29cc4f6c3ce502a5f41d35b6c4ec083a260f22d62631feb3",import.meta.url)],["p17_Graph.json",new URL("./files/cb462536f18d2fbc4bbaf709b9731cf8dc0792dfa0b61f49f3fa9c6d101a03575577beb433b556bd9fa2f480d65649f7d495236c9ce97a060a014f5699833c75",import.meta.url)],["p15_Graph.json",new URL("./files/89eec0da76ed3a3932c47b56fb1f6c469e31ce84589eb24722ced5e8b307df240b05f21e93723d3c3027cb3dcc4c9ba431844f966e5535c7e434cb81f2398004",import.meta.url)],["p14_Graph.json",new URL("./files/27f0e5d61a8bb59705b977bff71f935301e5cc5643f4a6c6fecb0be7eb23d5052c7c295679ca167f0eb70bede20cade2a13d587adef9fb4b6dc1bae0abfb59c7",import.meta.url)],["p13_Graph.json",new URL("./files/65497904f687699311fcc13e54e77a55f0053602f94b0217d7d476fcd59d1e6ad8865c2aef3d7fe253daacd9b89d0a82f542339cd499767c820f197da176bd25",import.meta.url)],["p12_Graph.json",new URL("./files/6f2f531bbcd2f82ecc31a41b28335648389b65c1e2cd7b9a1f8e351a7abd77777835b8c60baa3aeea4e09dc2e9e318077878ec60e100f9ecce7ab6ca06ecfa25",import.meta.url)],["p11_Graph.json",new URL("./files/30065ae705934e36f30176f388025b00703b6227ee3fcadf55e0b032857d5972d5d2f672f733fd4671a2b845a5db84d0cbc299b33ebc1ef7e67e36fb352d808e",import.meta.url)],["p10_Graph.json",new URL("./files/0c1ed96beec95ea9a01a537a035c4a6a7a0f8a6d88fa023da9774e3c46889198d6d4969ef85f9fd07815b06bd8a519326883b78cdb1de3fe92b41c73f1cd6882",import.meta.url)],["p7_Graph.json",new URL("./files/2d6ef162b2c051428ac04df375aec0d4601d456711aea0c1a0b9ffe63483306d0fe10948e85cbb65deccab4192f30a4afe9633f86f8fc2916fffae17d6c5de63",import.meta.url)],["p6_Graph.json",new URL("./files/9292f73263546dc6213faf86529801f6834719818f4d4213f0b34228ffd052008d698b2bfdb8c8b54383c6f4612fe883ad726e6d2e13ae062e63778d709adce0",import.meta.url)],["p5_Graph.json",new URL("./files/04b396224b534b762939a0c1ee98417bc6e8f7fba52e4c2ed47634807dec95fb8beb57f9f2ef312442ed5437d04a841ec96acd22d60875c789d6265ea9a01fa7",import.meta.url)],["p4_Graph.json",new URL("./files/900adb428321683a42626e6db21ad09350a7c83fb4ca8712051516996f151e2100aa852922c52ff367864d9ee08c11476893639da2531a844f7003d6575b1fed",import.meta.url)],["p3_Graph.json",new URL("./files/63b602455ebea20cb7c7721b033af74d8f452b3f878b279c1ac2325814186d85d6197698500062ddfb9c25b5da1b60233dc4c4c3cb660e5cf658f493accbba64",import.meta.url)],["p2_Graph.json",new URL("./files/21d2536e5081583642149f57441b067b460577a8abad0d7545243e5ac3bcd9bb2a84c2ac67face6d68f2f619ef29dcc6f49562d3be5c4c9189df35bbb86f6a27",import.meta.url)],["p1_Graph.json",new URL("./files/8309a20f4448d5772c53ed7530d9b8f7613429b9b16d209efb05f83b83fa67681725a199a5bf5524b5ce4010d69fb35c60cfcc40c2f4b43da5ab2b0677479e58",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Participant Fixation Data`
)});
  main.variable(observer("viewof selectData")).define("viewof selectData", ["menu"], function(menu){return(
menu('Participant Selection (Left)', [[1, 'p1graph'], [2, 'p1tree'], [3, 'p2graph'], [4, 'p2tree'], [5, 'p3graph'], [6, 'p3tree'], [7, 'p4graph'], [8, 'p4tree'], [9,'p5graph'], [10,'p5tree'], [11,'p6graph'], [12,'p6tree'], [13,'p7graph'], [14,'p7tree'], [15,'p10graph'], [16,'p10tree'], [17,'p11graph'], [18,'p11tree'], [19,'p12graph'], [20,'p12tree'], [21,'p13graph'], [22,'p13tree'], [23,'p14graph'], [24,'p14tree'], [25,'p15graph'], [26,'p15tree'], [27,'p16graph'], [27,'p16tree'], [29,'p17graph'], [30,'p17tree'], [31,'p18graph'], [32,'p18tree'], [33,'p19graph'], [34,'p19tree'], [35,'p20graph'], [36,'p20tree'], [37,'p21graph'], [38,'p21tree'], [39,'p23graph'], [40,'p23tree'], [41,'p24graph'], [42,'p24tree'], [43,'p25graph'], [44,'p25tree'], [45,'p27graph'], [46,'p27tree'], [47,'p28graph'], [48,'p28tree'], [49,'p30graph'], [50,'p30tree'], [51,'p31graph'], [52,'p31tree'], [53,'p32graph'], [54,'p32tree'], [55,'p33graph'], [56,'p33tree'], [57,'p34graph'], [58,'p34tree'], [59,'p35graph'], [60,'p35tree']])
)});
  main.variable(observer("selectData")).define("selectData", ["Generators", "viewof selectData"], (G, _) => G.input(_));
  main.variable(observer("viewof selectData2")).define("viewof selectData2", ["menu"], function(menu){return(
menu('Participant Selection (Right)', [[1, 'p1graph'], [2, 'p1tree'], [3, 'p2graph'], [4, 'p2tree'], [5, 'p3graph'], [6, 'p3tree'], [7, 'p4graph'], [8, 'p4tree'], [9,'p5graph'], [10,'p5tree'], [11,'p6graph'], [12,'p6tree'], [13,'p7graph'], [14,'p7tree'], [15,'p10graph'], [16,'p10tree'], [17,'p11graph'], [18,'p11tree'], [19,'p12graph'], [20,'p12tree'], [21,'p13graph'], [22,'p13tree'], [23,'p14graph'], [24,'p14tree'], [25,'p15graph'], [26,'p15tree'], [27,'p16graph'], [27,'p16tree'], [29,'p17graph'], [30,'p17tree'], [31,'p18graph'], [32,'p18tree'], [33,'p19graph'], [34,'p19tree'], [35,'p20graph'], [36,'p20tree'], [37,'p21graph'], [38,'p21tree'], [39,'p23graph'], [40,'p23tree'], [41,'p24graph'], [42,'p24tree'], [43,'p25graph'], [44,'p25tree'], [45,'p27graph'], [46,'p27tree'], [47,'p28graph'], [48,'p28tree'], [49,'p30graph'], [50,'p30tree'], [51,'p31graph'], [52,'p31tree'], [53,'p32graph'], [54,'p32tree'], [55,'p33graph'], [56,'p33tree'], [57,'p34graph'], [58,'p34tree'], [59,'p35graph'], [60,'p35tree']])
)});
  main.variable(observer("selectData2")).define("selectData2", ["Generators", "viewof selectData2"], (G, _) => G.input(_));
  main.variable(observer()).define(["vl","dataList","selectData","selectData2"], function(vl,dataList,selectData,selectData2)
{
  // create an interval selection over an x-axis encoding
  const brush = vl.selectInterval().encodings('x');
  const brush2 = vl.selectInterval().encodings('x');
  
  // determine opacity based on brush
  const opacity = vl.opacity().if(brush, vl.value(0.7)).value(0.01);
  const opacity2 = vl.opacity().if(brush2, vl.value(0.7)).value(0.01);

  // an overview histogram of cars per year
  // add the interval brush to select cars over time
  const overview = vl.markRect()
    .encode(
      vl.x().fieldO('Start Time')  // extract year unit, treat as ordinal
        .axis({tickCount: 3, title: 'ms', labelAngle: 0}),  // no title, no label angle
      //vl.y().count().title(null),             // counts, no axis title
      opacity  // modulate bar opacity based on the brush selection
    )
    .select(brush) // add interval brush selection to the chart
    .width(400)    // use the full default chart width
    .height(25);   // set chart height to 50 pixels
  
  const overview2 = vl.markRect()
    .encode(
      vl.x().fieldO('Start Time')  // extract year unit, treat as ordinal
        .axis({tickCount: 3, title: 'ms', labelAngle: 0}),  // no title, no label angle
      //vl.y().count().title(null),             // counts, no axis title
      opacity2  // modulate bar opacity based on the brush selection
    )
    .select(brush2) // add interval brush selection to the chart
    .width(400)    // use the full default chart width
    .height(25);   // set chart height to 50 pixels
  
  // a detail scatterplot of horsepower vs. mileage
  const detail = vl.markCircle()
    .encode(
      vl.x().fieldQ("X Pos"),       
      vl.y().fieldQ("Y Pos"),
      vl.size().fieldQ('Length').scale({range: [0, 120]}),
      vl.tooltip(['Fix Point', 'Length']),
      //vl.color().fieldQ('Length'),
      opacity  // modulate point opacity based on the brush selection
    );
  const detail2 = vl.markCircle()
    .encode(
      vl.x().fieldQ("X Pos"),       
      vl.y().fieldQ("Y Pos"),
      vl.size().fieldQ('Length').scale({range: [0, 120]}),
      vl.tooltip(['Fix Point', 'Length']),
      //vl.color().fieldQ('Length'),
      opacity2  // modulate point opacity based on the brush selection
    );

  // vertically concatenate (vconcat) charts
  const graphL = vl.data(dataList[selectData-1]).vconcat(detail, overview);
  const graphR = vl.data(dataList[selectData2-1]).vconcat(detail2, overview2);
  
  return vl.hconcat(graphL, graphR).render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`Use the drop down menus at the top left to select the datasets. Hovering over a fixation point displays its number and its length in ms. Click and drag to select a time-frame from the bar below each graph. This bar can be resized, as well as used to scrub through the timeline. Click in an unselected region to reset selection.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Resources and Processed Data`
)});
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  const child2 = runtime.module(define2);
  main.import("slider", child2);
  main.import("menu", child2);
  main.import("checkbox", child2);
  main.variable(observer("dataList")).define("dataList", ["p1graph","p1tree","p2graph","p2tree","p3graph","p3tree","p4graph","p4tree","p5graph","p5tree","p6graph","p6tree","p7graph","p7tree","p10graph","p10tree","p11graph","p11tree","p12graph","p12tree","p13graph","p13tree","p14graph","p14tree","p15graph","p15tree","p16graph","p16tree","p17graph","p17tree","p18graph","p18tree","p19graph","p19tree","p20graph","p20tree","p21graph","p21tree","p23graph","p23tree","p24graph","p24tree","p25graph","p25tree","p27graph","p27tree","p28graph","p28tree","p30graph","p30tree","p31graph","p31tree","p32graph","p32tree","p33graph","p33tree","p34graph","p34tree","p35graph","p35tree"], function(p1graph,p1tree,p2graph,p2tree,p3graph,p3tree,p4graph,p4tree,p5graph,p5tree,p6graph,p6tree,p7graph,p7tree,p10graph,p10tree,p11graph,p11tree,p12graph,p12tree,p13graph,p13tree,p14graph,p14tree,p15graph,p15tree,p16graph,p16tree,p17graph,p17tree,p18graph,p18tree,p19graph,p19tree,p20graph,p20tree,p21graph,p21tree,p23graph,p23tree,p24graph,p24tree,p25graph,p25tree,p27graph,p27tree,p28graph,p28tree,p30graph,p30tree,p31graph,p31tree,p32graph,p32tree,p33graph,p33tree,p34graph,p34tree,p35graph,p35tree){return(
[p1graph, p1tree, p2graph, p2tree, p3graph, p3tree, p4graph, p4tree, p5graph, p5tree, p6graph, p6tree, p7graph, p7tree, p10graph, p10tree, p11graph, p11tree, p12graph, p12tree, p13graph, p13tree, p14graph, p14tree, p15graph, p15tree, p16graph, p16tree, p17graph, p17tree, p18graph, p18tree, p19graph, p19tree, p20graph, p20tree, p21graph, p21tree, p23graph, p23tree, p24graph, p24tree, p25graph, p25tree, p27graph, p27tree, p28graph, p28tree, p30graph, p30tree, p31graph, p31tree, p32graph, p32tree, p33graph, p33tree, p34graph, p34tree, p35graph, p35tree ]
)});
  main.variable(observer("p1graph")).define("p1graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p1_Graph.json").json()
)});
  main.variable(observer("p2graph")).define("p2graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p2_Graph.json").json()
)});
  main.variable(observer("p3graph")).define("p3graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p3_Graph.json").json()
)});
  main.variable(observer("p4graph")).define("p4graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p4_Graph.json").json()
)});
  main.variable(observer("p5graph")).define("p5graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p5_Graph.json").json()
)});
  main.variable(observer("p6graph")).define("p6graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p6_Graph.json").json()
)});
  main.variable(observer("p7graph")).define("p7graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p7_Graph.json").json()
)});
  main.variable(observer("p10graph")).define("p10graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p10_Graph.json").json()
)});
  main.variable(observer("p11graph")).define("p11graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p11_Graph.json").json()
)});
  main.variable(observer("p12graph")).define("p12graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p12_Graph.json").json()
)});
  main.variable(observer("p13graph")).define("p13graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p13_Graph.json").json()
)});
  main.variable(observer("p14graph")).define("p14graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p14_Graph.json").json()
)});
  main.variable(observer("p15graph")).define("p15graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p15_Graph.json").json()
)});
  main.variable(observer("p16graph")).define("p16graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p16_Graph.json").json()
)});
  main.variable(observer("p17graph")).define("p17graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p17_Graph.json").json()
)});
  main.variable(observer("p18graph")).define("p18graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p18_Graph.json").json()
)});
  main.variable(observer("p19graph")).define("p19graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p19_Graph.json").json()
)});
  main.variable(observer("p20graph")).define("p20graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p20_Graph.json").json()
)});
  main.variable(observer("p21graph")).define("p21graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p21_Graph.json").json()
)});
  main.variable(observer("p23graph")).define("p23graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p23_Graph.json").json()
)});
  main.variable(observer("p24graph")).define("p24graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p24_Graph.json").json()
)});
  main.variable(observer("p25graph")).define("p25graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p25_Graph.json").json()
)});
  main.variable(observer("p27graph")).define("p27graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p27_Graph.json").json()
)});
  main.variable(observer("p28graph")).define("p28graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p28_Graph.json").json()
)});
  main.variable(observer("p30graph")).define("p30graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p30_Graph.json").json()
)});
  main.variable(observer("p31graph")).define("p31graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p31_Graph.json").json()
)});
  main.variable(observer("p32graph")).define("p32graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p32_Graph.json").json()
)});
  main.variable(observer("p33graph")).define("p33graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p33_Graph.json").json()
)});
  main.variable(observer("p34graph")).define("p34graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p34_Graph.json").json()
)});
  main.variable(observer("p35graph")).define("p35graph", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p35_Graph.json").json()
)});
  main.variable(observer("p1tree")).define("p1tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p1_Tree.json").json()
)});
  main.variable(observer("p2tree")).define("p2tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p2_Tree.json").json()
)});
  main.variable(observer("p3tree")).define("p3tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p3_Tree.json").json()
)});
  main.variable(observer("p4tree")).define("p4tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p4_Tree.json").json()
)});
  main.variable(observer("p5tree")).define("p5tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p5_Tree.json").json()
)});
  main.variable(observer("p6tree")).define("p6tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p6_Tree.json").json()
)});
  main.variable(observer("p7tree")).define("p7tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p7_Tree.json").json()
)});
  main.variable(observer("p10tree")).define("p10tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p10_Tree.json").json()
)});
  main.variable(observer("p11tree")).define("p11tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p11_Tree.json").json()
)});
  main.variable(observer("p12tree")).define("p12tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p12_Tree.json").json()
)});
  main.variable(observer("p13tree")).define("p13tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p13_Tree.json").json()
)});
  main.variable(observer("p14tree")).define("p14tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p14_Tree.json").json()
)});
  main.variable(observer("p15tree")).define("p15tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p15_Tree.json").json()
)});
  main.variable(observer("p16tree")).define("p16tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p16_Tree.json").json()
)});
  main.variable(observer("p17tree")).define("p17tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p17_Tree.json").json()
)});
  main.variable(observer("p18tree")).define("p18tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p18_Tree.json").json()
)});
  main.variable(observer("p19tree")).define("p19tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p19_Tree.json").json()
)});
  main.variable(observer("p20tree")).define("p20tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p20_Tree.json").json()
)});
  main.variable(observer("p21tree")).define("p21tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p21_Tree.json").json()
)});
  main.variable(observer("p23tree")).define("p23tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p23_Tree.json").json()
)});
  main.variable(observer("p24tree")).define("p24tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p24_Tree.json").json()
)});
  main.variable(observer("p25tree")).define("p25tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p25_Tree.json").json()
)});
  main.variable(observer("p27tree")).define("p27tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p27_Tree.json").json()
)});
  main.variable(observer("p28tree")).define("p28tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p28_Tree.json").json()
)});
  main.variable(observer("p30tree")).define("p30tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p30_Tree.json").json()
)});
  main.variable(observer("p31tree")).define("p31tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p31_Tree.json").json()
)});
  main.variable(observer("p32tree")).define("p32tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p32_Tree.json").json()
)});
  main.variable(observer("p33tree")).define("p33tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p33_Tree.json").json()
)});
  main.variable(observer("p34tree")).define("p34tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p34_Tree.json").json()
)});
  main.variable(observer("p35tree")).define("p35tree", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("p35_Tree.json").json()
)});
  return main;
}
