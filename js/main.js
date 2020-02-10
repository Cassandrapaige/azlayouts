const home = document.querySelector('.homepage');
const letter = document.querySelector('.letter');
const header = document.querySelector('.header');
const logo = document.querySelector('#logo');
const container = document.querySelector('.container');
const fonts = document.querySelector('#fonts');
const colors = document.querySelector('#colors');
const nav = Array.from(document.querySelectorAll('.nav li'));
const navbar = document.querySelector('.nav');
const collapse = document.querySelector('.collapse_icon');
const cssTip = document.querySelector('#cssTip');
const layout = document.querySelector('.layout');

/* FONTS SECTION TEMPLATE */
const renderFonts = (font, color) => {
    const markup = ` 
        <h3 style="color:${color.secondary}">font-family:
        <br><span style="color:${color.complimentary}">${font.family}</span></h3>
        <h3 style="color:${color.secondary}">font-style:
        <br><span style="color:${color.complimentary}">${font.style}</span></h3>
        <h3 style="color:${color.secondary}">font-weight:
        <br><span style="color:${color.complimentary}">${font.weight}</span></h3>`;
    fonts.innerHTML = markup;
};

/* COLORS SECTION TEMPLATE */
const renderColors = (color) => {
    const markup = ` 
        <h2>Colors</h2>
        <div class="color_item" style="background:${color.primary}" onClick="copyColor(this)">${color.primary}</div>
        <div class="color_item" style="background:${color.secondary}" onClick="copyColor(this)">${color.secondary}</div>
        <div class="color_item" style="background:${color.complimentary}" onClick="copyColor(this)">${color.complimentary}</div>
        <div class="color_item" style="background:${color.contrast}" onClick="copyColor(this)">${color.contrast}</div>`;
    colors.innerHTML = markup;
};

/* CODE SNIPPET SECTION TEMPLATE */
const renderCss = (tip, color) => {
  const markup = `
    <h4 class="selector" style="color:${color.secondary}">${tip.selector}{
        <br> <span class='method' style="color:${color.primary}">${tip.method}</span>}
    </h4>
    <a href="${tip.src}" target="_blank"><button style="border: solid 2px ${color.contrast}; color:${color.contrast}">Example</button></a>
    <p style="background:${color.secondary}" class= 'exp'>${tip.exp}</p>
    `;
   cssTip.innerHTML = markup;
};

/* COPY COLOUR HEX CODE TO CLIPBOARD */
const copyColor = (element) => {
   var range, selection, worked;
     if (document.body.createTextRange) {
	range = document.body.createTextRange();
	range.moveToElementText(element);
	range.select();
      } else if (window.getSelection) {
	selection = window.getSelection();
	range = document.createRange();
	range.selectNodeContents(element);
	selection.removeAllRanges();
	selection.addRange(range);
	}
	try {
	    document.execCommand('copy');
	} catch (err) {
	    console.log(err);
	}
};

/* CREATE PAGE LAYOUT */
const pageLayout = () => {
	let $ = data[event.key].color;
	let letters = event.key.repeat(2);
	let [letter1, letter2] = [letters[0].toUpperCase(),letters[1]];
	letter.textContent = `${letter1}${letter2}`;
	letter.style.color = $.primary;
	logo.textContent = `${letter1}${letter2}`;
	header.style.backgroundColor = $.secondary;
	fonts.style.backgroundColor = $.primary;
	nav[0].style.color = $.primary;
	nav[1].style.color = $.secondary;
	nav[2].style.color = $.complimentary;
	letter.style.fontFamily = data[event.key].font.family;
};

/* CHANGE LAYOUT DEPENDING ON KEYPRESS */
const onKeypress = (event) => {
    if (data[event.key]) {
	home.style.display = 'none';
	container.style.display = 'block';
	pageLayout();
	renderFonts(data[event.key].font, data[event.key].color);
	renderColors(data[event.key].color);
	renderCss(data[event.key].tip, data[event.key].color);
     }
};

window.addEventListener('keypress', onKeypress);
window.addEventListener('load', () => {
     container.style.display = 'none';
});

const data = {
	q: {
		color: {
			primary: '#FFBD2B',
			secondary: '#FF573A',
			complimentary: '#6394FF',
			contrast: '#1F3340'
		},
		font: {
			family: 'quiche-sans, sans-serif',
			style: 'normal',
			weight: '800'
		},
		tip: {
			selector: 'h1 {',
			method: '-webkit-text-stroke: 4px #FF573A; }',
			src: 'https://codepen.io/cassandraPaige/pen/povxWre',
			exp: 'The text-stroke property allows you to change the width and color of the texts stroke effect. Do further research and find a way to include it in your website.'		
		}
	},
	a: {
		color: {
			primary: '#BF4974',
			secondary: '#132B40',
			complimentary: '#D9A566',
			contrast: '#8F94A6'
		},
		font: {
			family: 'alfarn, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: ':nth-of-type(1) {',
			method: 'background: #D96AA7; }',
			src: 'https://codepen.io/cassandraPaige/pen/NWPOwXy',
			exp: 'The :nth-f-type selector allows you to use numbers, keywords and formulas to target specific elements based on their position in the DOM tree. Do further research and find a way to include it in your website.'
		}
	},
	z: {
		color: {
			primary: '#BE4269',
			secondary: '#351835',
			complimentary: '#D0B651',
			contrast: '#6D184A'
		},
		font: {
			family: ' zebrawood-std-fill, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: '::before {',
			method: 'content: " "; }',
			src: 'https://codepen.io/cassandraPaige/pen/QWwrzbN',
			exp: 'The ::before and ::after psuedo selectors allow you to render elements to the page using CSS, and position them relevant to their parent element. These elements are not visible in the DOM tree, however they appear on the page as if they were. Do further research and find a way to include it in your website.'
		}
	},
	w: {
		color: {
			primary: '#F24B88',
			secondary: '#63AEBF',
			complimentary: '#F2C230',
			contrast: '#F29544'
		},
		font: {
			family: 'wigwag-bold, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: 'body {',
			method: 'background: repeating-linear-gradient(); }',
			src: 'https://codepen.io/cassandraPaige/pen/VwYdRab?editors=1100',
			exp: 'Just as it sounds, the repeating-linear-gradient() function is used to repeat linear gradients. Specify an angle, multiple colors, and color stops to create something truly unique. In our example, we were able to create a unique deisgn with the help of the mix-blend-mode property. Do further research and find a way to include it in your website.'
		}
	},
	s: {
		color: {
			primary: '#FE6B6B',
			secondary: '#4ECDC4',
			complimentary: '#556370',
			contrast: '#C54D57'
		},
		font: {
			family: 'sweater-school, sans-serif',
			style: 'normal',
			weight: '700'
		},
		tip: {
			selector: 'section {',
			method: 'transform: skewY(12deg); }',
			src: 'https://codepen.io/cassandraPaige/pen/jOEKEOq',
			exp: 'Use skew() to distort an element by changing the direction of its angles, both horizontally and vertically. Here we have used skew() to create a slanted background effect on the footer element. Do further research and find a way to include it in your website.'
		}
	},
	x: {
		color: {
			primary: '#62CDD9',
			secondary: '#F29BB2',
			complimentary: '#0396A6',
			contrast: '#F2AEBB'
		},
		font: {
			family: ' xenera, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: '.container {',
			method: 'background: repeating-conic-gradient();',
			src: 'https://codepen.io/cassandraPaige/pen/GRgGLoz',
			exp: 'A conic-graident is used for creating pie charts or color wheels, which rotate around a center point. You can add multiple colours to your graident by using colour-stops, specified by an angle. Please note, that at this time, this example may only be available on Chrome. Do further research and find a way to include it in your website.'
		}
	},
	e: {
		color: {
			primary: '#F04B70',
			secondary: '#521C59',
			complimentary: '#BFB4B0',
			contrast: '#7A398C'
		},
		font: {
			family: 'ebony, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: 'h1 {',
			method: 'writing-mode: vertical-rl; }',
			src: 'https://codepen.io/cassandraPaige/pen/abzRVgO',
			exp: 'Writing-mode allows you to position your text vertically on the page. Do further research and find a way to include it in your website. '
		}
	},
	d: {
		color: {
			primary: '#30B4B6',
			secondary: '#833F74',
			complimentary: '#242424',
			contrast: '#BB89AD'
		},
		font: {
			family: 'delittle-chromatic, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: 'h1 {',
			method: 'text-shadow: 5px 5px #30B4B6 };',
			src: 'https://codepen.io/cassandraPaige/pen/rNazJzd',
			exp: 'Text-shadow allows you to add shadows to your text by specifying the x and y offsets, blur-radius and color. Do further research and find a way to include it in your website. '
		}
	},
	c: {
		color: {
			primary: '#00B7DC',
			secondary: '#FF90C4',
			complimentary: '#FFF073',
			contrast: '#DE88C8'
		},
		font: {
			family: 'cantarell, sans-serif',
			style: 'normal',
			weight: '700'
		},
		tip: {
			selector: 'h1 {',
			method: '-webkit-background-clip: text };',
			src: 'https://codepen.io/cassandraPaige/pen/JjoypXB',
			exp: 'Background-clip is used to clip an elements background to its surrounding border or content-box. In this case we have clipped it to the foreground text, which has allowed us to add a subtle animation to the texts background. Do further research and find a way to include it in your website.'
		}
	},
	r: {
		color: {
			primary: '#D5D95F',
			secondary: '#BF4588',
			complimentary: '#6321A6',
			contrast: '#04C4D9'
		},
		font: {
			family: 'restore, sans-serif',
			style: 'normal',
			weight: '700'
		},
		tip: {
			selector: 'input:checked {',
			method: 'background-color: #04C4D9; }',
			src: 'https://codepen.io/cassandraPaige/pen/povKvLr',
			exp: 'The :checked pseudo-class targets radio buttons and checkboxes, applying styles to "active" elements. Check Mozilla for examples on how to use :checked to toggle an active class, depending on targets state. Do further research and find a way to include it in your website.'
		}
	},
	f: {
		color: {
			primary: '#F24141',
			secondary: '#04B2D9',
			complimentary: '#F29F05',
			contrast: '#049DD9'
		},
		font: {
			family: 'fairway, sans-serif',
			style: 'normal',
			weight: '700'
		},
		tip: {
			selector: 'svg {',
			method: 'fill: #F24141; }',
			src: 'https://codepen.io/cassandraPaige/pen/ZEYRmjb',
			exp: 'The fill property allows you to change the color of an SVG element. Hover over the example images and see how they change color. This would not be possible by just adding a background-color. Do further research and find a way to include it in your website.'
		}
	},
	v: {
		color: {
			primary: '#00C2B5',
			secondary: '#FF0150',
			complimentary: '#FFDB00',
			contrast: '#303740'
		},
		font: {
			family: 'vatican, sans-serif',
			style: 'normal',
			weight: '300'
		},
		tip: {
			selector: '::selection {',
			method: 'background-color: #00C2B5; }',
			src: 'https://codepen.io/cassandraPaige/pen/bGNMmga',
			exp: 'The ::selection pseudo element is used to change the background color of highlighted text. You can simply attach it to the root of the document to apply the same background color to each element on the page, or add it to individual elements depending on your purpose. Do further research and find a way to include it in your website.'
		}
	},
	t: {
		color: {
			primary: '#F2BE22',
			secondary: '#752F5C',
			complimentary: '#271C40',
			contrast: '#D9048E'
		},
		font: {
			family: 'tachyon, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: '.img {',
			method: 'grid-column: 1/3; }',
			src: 'https://codepen.io/cassandraPaige/pen/abzGQOm',
			exp: 'Use grid-column to dynamically position elements on a page, by specifying their start and end positions. Do further research and find a way to include it in your website.'
		}
	},
	g: {
		color: {
			primary: '#011526',
			secondary: '#03738C',
			complimentary: '#798C8C',
			contrast: '#024059'
		},
		font: {
			family: 'gothic-open-shaded, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: '.section {',
			method: 'background-attachment: fixed; }',
			src: 'https://codepen.io/cassandraPaige/pen/MWYGqvE',
			exp: 'Here we have used background-attachment to crate a parallax scrolling effect, specifying that we would like our images position to be fixed to the page. Do further research and find a way to include it in your website.'
		}
	},
	b: {
		color: {
			primary: '#F29F05',
			secondary: '#F23D5E',
			complimentary: '#ADBF69',
			contrast: '#F22233'
		},
		font: {
			family: 'balboa, sans-serif',
			style: 'normal',
			weight: '300'
		},
		tip: {
			selector: '.container {',
			method: 'overflow: hidden; }',
			src: 'https://codepen.io/cassandraPaige/pen/MWYPQmm',
			exp: 'The overflow property determines what happens if an elements content is larger than its container element. Try removing overflow: hidden from the example, and notice how the car is no longer contained within its own container. Do further research and find a way to include it in your website.'
		}
	},
	h: {
		color: {
			primary: '#0388A6',
			secondary: '#151226',
			complimentary: '#731F4D',
			contrast: '#BF307F'
		},
		font: {
			family: 'halogen, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: '.btn {',
			method: 'transform: translateY(100px); }',
			src: 'https://codepen.io/cassandraPaige/pen/MWYeqwZ',
			exp: 'Use translate() to reposition an elements position along the X and Y axis. Do further research and find a way to include it in your website.'
		}
	},
	n: {
		color: {
			primary: '#F2C029',
			secondary: '#08748C',
			complimentary: '#023440',
			contrast: '#011826'
		},
		font: {
			family: 'navigo, sans-serif',
			style: 'normal',
			weight: '700'
		},
		tip: {
			selector: '.card {',
			method: 'clip-path: polygon(0 0, 0% 100%, 100% 0); }',
			src: 'https://codepen.io/cassandraPaige/pen/abzGaZG',
			exp: 'Clip path is used for creating shapes, by specifying individual point positions along the X and Y axis. You can use it to clip an image or element, so that only the clipped portion of the element will be visible. Do further research and find a way to include it in your website.'
		}
	},
	y: {
		color: {
			primary: '#A8E4F0',
			secondary: '#B0749C',
			complimentary: '#3A615B',
			contrast: '#B08B64'
		},
		font: {
			family: 'ysans-std, sans-serif',
			style: 'normal',
			weight: '700'
		},
		tip: {
			selector: '.container {',
			method: 'transform: scale(1.2); }',
			src: 'ttps://codepen.io/cassandraPaige/pen/MWYPOGZ',
			exp: 'Use scale() to change the size of an element along the X and Y axis, aka change the width and/or height of an element to create a smooth transition. Note how we used "transform:origin" in our example, to keep our element in its original position. Do further research and find a way to include it in your website.'
		}
	},
	u: {
		color: {
			primary: '#349399',
			secondary: '#E884AC',
			complimentary: '#FAEF91',
			contrast: '#B490D1'
		},
		font: {
			family: ' upgrade, sans-serif',
			style: 'normal',
			weight: '700'
		},
		tip: {
			selector: '.container {',
			method: 'scrollbar-width: none; }',
			src: 'https://codepen.io/cassandraPaige/pen/xxbjaQM',
			exp: 'The scrollbar-width property allows you to change the width of a scrollbar. In this particular case we have set the width to "none", removing it from the viewport entirely. Do further research and find a way to include it in your website.'
		}
	},
	j: {
		color: {
			primary: '#04ADBF',
			secondary: '#F23D5E',
			complimentary: '#025E73',
			contrast: '#F26389'
		},
		font: {
			family: 'joost, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: '.section {',
			method: 'background: linear-gradient();',
			src: 'https://codepen.io/cassandraPaige/pen/JPMyQQ',
			exp: 'By default, a linear-gradient creates a background image consiting of a smooth transition between 2 or more colours, along a straight line. You can specify the direction that you wish your gradient to go in, as well as colour-stops, to create a more unique background image. Do further research and find a way to include it in your website.'
		}
	},
	m: {
		color: {
			primary: '#038C8C',
			secondary: '#022859',
			complimentary: '#F7689D',
			contrast: '#B571AC'
		},
		font: {
			family: 'macha, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: '.container {',
			method: 'position: sticky; }',
			src: 'https://codepen.io/cassandraPaige/pen/oNgmbyx',
			exp: 'Sticky positioning treats an elements as if were relatively positionend on the page until it reaches a certain threshold and "sticks" itself in position. It remains "stuck" to the page until it has scrolled through the containers remaining contents. Do further research and find a way to include it in your website.'
		}
	},
	i: {
		color: {
			primary: '#8172F8',
			secondary: '#F64398',
			complimentary: '#68BBDD',
			contrast: '#4B9116'
		},
		font: {
			family: 'imperial-urw, sans-serif',
			style: 'normal',
			weight: '700'
		},
		tip: {
			selector: 'p::first-line {',
			method: 'font-size: 40px; }',
			src: 'https://codepen.io/cassandraPaige/pen/JjomyZJ',
			exp: 'The ::first-line pseudo element will apply styles to the first line of a block-level element. Styles will adjust according to viewport size. Do further research and find a way to include it in your website.'
		}
	},
	k: {
		color: {
			primary: '#CC5E88',
			secondary: '#188199',
			complimentary: '#90FFD6',
			contrast: '#FFD0CF'
		},
		font: {
			family: 'kari-display-pro, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: '.item {',
			method: 'transform: rotate(360deg); }',
			src: 'https://codepen.io/cassandraPaige/pen/JjoZjYb',
			exp: 'Use rotate() to rotate an element by a specified degree. A positive angle will produce a clockwise rotation, whereas a negative angle will produce a counter-clockwise rotation. Do further research and find a way to include it in your website.'
		}
	},
	o: {
		color: {
			primary: '#9DD973',
			secondary: '#F26B83',
			complimentary: '#F2E966',
			contrast: '#F2B05E'
		},
		font: {
			family: 'opake, sans-serif',
			style: 'normal',
			weight: '900'
		},
		tip: {
			selector: 'h1 {',
			method: 'mix-blend-mode: screen; }',
			src: 'https://codepen.io/cassandraPaige/pen/jOEMMyp',
			exp: 'Use mix-blend-mode to define how various elements should blend with their backgrounds. Explore using different values to see how each one creates a different effect/ colour combination. Do further research and find a way to include it in your website.'
		}
	},
	l: {
		color: {
			primary: '#F2C641',
			secondary: '#D94A4A',
			complimentary: '#208C6E',
			contrast: '#84BFBF'
		},
		font: {
			family: ' latex, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: 'img {',
			method: 'filter: hue-rotate(90deg); }',
			src: 'https://codepen.io/cassandraPaige/pen/Poweyve',
			exp: 'Similar to the effects found on Photoshop, CSS filters allow you to manipulate images by adding filters such as blur, hue or grayscale. Do further research and find a way to include it in your website.'
		}
	},
	p: {
		color: {
			primary: '#D64776',
			secondary: '#6A5385',
			complimentary: '#45556B',
			contrast: '#4D8A77'
		},
		font: {
			family: 'paralucent, sans-serif',
			style: 'normal',
			weight: '400'
		},
		tip: {
			selector: 'input:focus {',
			method: 'outline: 2px solid #4D8A77; }',
			src: 'https://codepen.io/cassandraPaige/pen/QWwrZxZ',
			exp: 'The :focus pseudo-class is used on form elements to apply styles when a user clicks on an input field. Do further research and find a way to include it in your website.'
		}
	}
};
