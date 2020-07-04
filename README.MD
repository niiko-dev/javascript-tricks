# VJS

VJS is a series of Javascript plugins..

| Subject | Description  |
| :---:   | :-: |
| [Installation](#Installation) | How to install **VJS** |
| [Requiring](#Requiring) | **Require** it in a variable |
| [Plugins](#Plugins)| All **plugins** |

## Installation

Import the javascript file called **main.js** to your website.

## Requiring

When imported to your website always call this function to require it.

```javascript
window._VJS.Require([window, document])
```

## Plugins
| Plugin | Description  |
| :---:   | :-: |
| [Animate](#Animate) | Animate **elements** |
| [JSON](#JSON) | Store **JSON** in elements |

### Animate
```javascript
VJS.Animate(
    document.getElementById('niiko'),      // element to animate
    [{'color': 'red'}, {'color': 'blue'}], // styles to be animated
    2500                                   // duration
);
```

### JSON
```javascript
VJS.JSON.set(
    document.getElementById('niiko'),      // element to store json in
    {'name': 'niiko', 'skills': ['js']},   // json data
);

VJS.JSON.get(
    document.getElementById('niiko')       // element that has json in it
);
```

### 