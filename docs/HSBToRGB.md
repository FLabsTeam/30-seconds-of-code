---
title: HSB to RGB
tags: math
expertise: intermediate
firstSeen: 2020-09-18T14:25:07+03:00
lastUpdated: 2020-09-18T14:25:07+03:00
---


<worksheet-viewer data-uid="sVrJYMK">
			{"range":{"from":{"line":9,"ch":0,"sticky":"after","xRel":0},"to":{"line":9,"ch":1248}},"markdown":"<div class=\"d-flex flex-column\" style=\"max-height: 250px; overflow: hidden;\">\n            <div class=\"d-flex flew-column align-items-center\">\n                <div class=\"d-flex align-items-center blue-text text-darken-4 px-2\">   \n                    <i class=\"fas fa-file-excel fa-2x\" style=\"\"></i>\n                    <div class=\"msg-container ml-4\"><span class=\"indigo-text text-darken-2\">WorkSheet-${uid}</span></div>\n                </div>\n            </div>\n            <div class=\"d-flex flew-column align-items-center\">\n                <worksheet-viewer data-uid=\"${uid}\">\n                    {\"uid\":\"${uid}\",\"data\":{\"styles\":[{\"border\":{\"bottom\":[\"thin\",\"#000\"],\"top\":[\"thin\",\"#000\"],\"left\":[\"thin\",\"#000\"],\"right\":[\"thin\",\"#000\"]},\"font\":{\"bold\":true},\"align\":\"center\"},{\"font\":{\"bold\":true},\"align\":\"center\"}],\"name\":\"sheet1\",\"validations\":[],\"autofilter\":{},\"merges\":[],\"freeze\":\"A1\",\"rows\":{\"0\":{\"cells\":{\"0\":{\"style\":0,\"text\":\"Col 1\"},\"1\":{\"style\":1,\"text\":\"Col 2\"},\"2\":{\"style\":1,\"text\":\"Col 3\"}}},\"1\":{\"cells\":{\"0\":{\"text\":\"1\"},\"1\":{\"text\":\"=A2*2\"},\"2\":{\"text\":\"=B2*2\"}}},\"2\":{\"cells\":{\"0\":{\"text\":\"=A2*2\"},\"1\":{\"text\":\"=A3*2\"},\"2\":{\"text\":\"=B3*2\"}}}},\"cols\":{}}}\n                </worksheet-viewer>\n            </div>\n        </div>","uid":"sVrJYMK","content":"<div class=\"d-flex flex-column\" style=\"max-height: 250px; overflow: hidden;\">\n            <div class=\"d-flex flew-column align-items-center\">\n                <div class=\"d-flex align-items-center blue-text text-darken-4 px-2\">   \n                    <i class=\"fas fa-file-excel fa-2x\" style=\"\"></i>\n                    <div class=\"msg-container ml-4\"><span class=\"indigo-text text-darken-2\">WorkSheet-${uid}</span></div>\n                </div>\n            </div>\n            <div class=\"d-flex flew-column align-items-center\">\n                <worksheet-viewer data-uid=\"${uid}\">\n                    {\"uid\":\"${uid}\",\"data\":{\"styles\":[{\"border\":{\"bottom\":[\"thin\",\"#000\"],\"top\":[\"thin\",\"#000\"],\"left\":[\"thin\",\"#000\"],\"right\":[\"thin\",\"#000\"]},\"font\":{\"bold\":true},\"align\":\"center\"},{\"font\":{\"bold\":true},\"align\":\"center\"}],\"name\":\"sheet1\",\"validations\":[],\"autofilter\":{},\"merges\":[],\"freeze\":\"A1\",\"rows\":{\"0\":{\"cells\":{\"0\":{\"style\":0,\"text\":\"Col 1\"},\"1\":{\"style\":1,\"text\":\"Col 2\"},\"2\":{\"style\":1,\"text\":\"Col 3\"}}},\"1\":{\"cells\":{\"0\":{\"text\":\"1\"},\"1\":{\"text\":\"=A2*2\"},\"2\":{\"text\":\"=B2*2\"}}},\"2\":{\"cells\":{\"0\":{\"text\":\"=A2*2\"},\"1\":{\"text\":\"=A3*2\"},\"2\":{\"text\":\"=B3*2\"}}}},\"cols\":{}}}\n                </worksheet-viewer>\n            </div>\n        </div>","data":{"name":"sheet1","freeze":"A1","styles":[{"border":{"bottom":["thin","#000"],"top":["thin","#000"],"left":["thin","#000"],"right":["thin","#000"]},"font":{"bold":true},"align":"center"},{"font":{"bold":true},"align":"center"}],"merges":[],"rows":{"0":{"cells":{"0":{"style":0,"text":"Col 1"},"1":{"style":1,"text":"Col 2"},"2":{"style":1,"text":"Col 3"}}},"1":{"cells":{"0":{"text":"1"},"1":{"text":"=A2*2"},"2":{"text":"=B2*2"}}},"2":{"cells":{"0":{"text":"=A2*2"},"1":{"text":"=A3*2"},"2":{"text":"=B3*2"}}},"3":{"cells":{"0":{"text":"aand"},"1":{"text":"jskdhfksdh"},"2":{"text":"s"},"3":{"text":"s"}}},"4":{"cells":{"0":{"text":"lka"},"1":{"text":"jkdhfbgkjshdb"}}},"len":100},"cols":{"len":26},"validations":[]},"config":{"cType":"worksheet"},"cursor":{"line":9,"ch":0,"sticky":"after","xRel":0}}
		</worksheet-viewer>





Converts a HSB color tuple to RGB format.

- Use the [HSB to RGB conversion formula](https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB) to convert to the appropriate format.
- The range of the input parameters is H: [0, 360], S: [0, 100], B: [0, 100].
- The range of all output values is [0, 255].

```js
const HSBToRGB = (h, s, b) => {
  s /= 100;
  b /= 100;
  const k = (n) => (n + h / 60) % 6;
  const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  return [255 * f(5), 255 * f(3), 255 * f(1)];
};
```

```js
HSBToRGB(18, 81, 99); // [252.45, 109.31084999999996, 47.965499999999984]
```
