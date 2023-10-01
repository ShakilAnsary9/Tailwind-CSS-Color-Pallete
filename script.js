const colorData = [
  {
    name: "Red",
    colors: [
      "#7F1D1D",
      "#991B1B",
      "#B91C1C",
      "#DC2626",
      "#EF4444",
      "#F87171",
      "#FCA5A5",
      "#FECACA",
      "#FEE2E2",
      "#FEF2F2",
    ],
  },
  {
    name: "Orange",
    colors: [
      "#7C2D12",
      "#9A3412",
      "#C2410C",
      "#EA580C",
      "#F97316",
      "#FB923C",
      "#FDBA74",
      "#FED7AA",
      "#FFEDD5",
      "#FFF7ED",
    ],
  },
  {
    name: "Amber",
    colors: [
      "#78350F",
      "#92400E",
      "#B45309",
      "#D97706",
      "#F59E0B",
      "#FBBF24",
      "#FCD34D",
      "#FDE68A",
      "#FEF3C7",
      "#FFFBEB",
    ],
  },
  {
    name: "Yellow",
    colors: [
      "#713F12",
      "#854D0E",
      "#A16207",
      "#CA8A04",
      "#EAB308",
      "#FACC15",
      "#FDE047",
      "#FEF08A",
      "#FEF9C3",
      "#FEFCE8",
    ],
  },
  {
    name: "Lime",
    colors: [
      "#365314",
      "#3F6212",
      "#4D7C0F",
      "#65A30D",
      "#84CC16",
      "#A3E635",
      "#BEF264",
      "#D9F99D",
      "#ECFCCB",
      "#F7FEE7",
    ],
  },
  {
    name: "Green",
    colors: [
      "#14532D",
      "#166534",
      "#15803D",
      "#16A34A",
      "#22C55E",
      "#4ADE80",
      "#86EFAC",
      "#BBF7D0",
      "#DCFCE7",
      "#F0FDF4",
    ],
  },
  {
    name: "Emerald",
    colors: [
      "#064E3B",
      "#065F46",
      "#047857",
      "#059669",
      "#10B981",
      "#34D399",
      "#6EE7B7",
      "#A7F3D0",
      "#D1FAE5",
      "#ECFDF5",
    ],
  },
  {
    name: "Teal",
    colors: [
      "#134E4A",
      "#115E59",
      "#0F766E",
      "#0D9488",
      "#14B8A6",
      "#2DD4BF",
      "#5EEAD4",
      "#99F6E4",
      "#CCFBF1",
      "#F0FDFA",
    ],
  },
  {
    name: "Cyan",
    colors: [
      "#164E63",
      "#155E75",
      "#0E7490",
      "#0891B2",
      "#06B6D4",
      "#22D3EE",
      "#67E8F9",
      "#A5F3FC",
      "#CFFAFE",
      "#ECFEFF",
    ],
  },
  {
    name: "Light Blue",
    colors: [
      "#0C4A6E",
      "#075985",
      "#0369A1",
      "#0284C7",
      "#0EA5E9",
      "#38BDF8",
      "#7DD3FC",
      "#BAE6FD",
      "#E0F2FE",
      "#F0F9FF",
    ],
  },
  {
    name: "Blue",
    colors: [
      "#1E3A8A",
      "#1E40AF",
      "#1D4ED8",
      "#2563EB",
      "#3B82F6",
      "#60A5FA",
      "#93C5FD",
      "#BFDBFE",
      "#DBEAFF",
      "#EFF6FF",
    ],
  },
  {
    name: "Indigo",
    colors: [
      "#312E81",
      "#3730A3",
      "#4338CA",
      "#4F46E5",
      "#6366F1",
      "#818CF8",
      "#A5B4FC",
      "#C7D2FE",
      "#E0E7FF",
      "#EEF2FF",
    ],
  },
  {
    name: "Violet",
    colors: [
      "#4C1D95",
      "#5B21B6",
      "#6D28D9",
      "#7C3AED",
      "#8B5CF6",
      "#A78BFA",
      "#C4B5FD",
      "#DDD6FE",
      "#EDE9FE",
      "#F5F3FF",
    ],
  },
  {
    name: "Purple",
    colors: [
      "#581C87",
      "#6B21A8",
      "#7E22CE",
      "#9333EA",
      "#A855F7",
      "#C084FC",
      "#D8B4FE",
      "#E9D5FF",
      "#F3E8FF",
      "#FAF5FF",
    ],
  },
  {
    name: "Fuchsia",
    colors: [
      "#701A75",
      "#86198F",
      "#A21CAF",
      "#C026D3",
      "#D946EF",
      "#E879F9",
      "#F0ABFC",
      "#F5D0FE",
      "#FAE8FF",
      "#FDF4FF",
    ],
  },
  {
    name: "Pink",
    colors: [
      "#831843",
      "#9D174D",
      "#BE185D",
      "#DB2777",
      "#EC4899",
      "#F472B6",
      "#F9A8D4",
      "#FBCFE8",
      "#FCE7F3",
      "#FDF2F8",
    ],
  },
  {
    name: "Rose",
    colors: [
      "#881337",
      "#9F1239",
      "#BE123C",
      "#E11D48",
      "#F43F5E",
      "#FB7185",
      "#FDA4AF",
      "#FECDD3",
      "#FFE4E6",
      "#FFF1F2",
    ],
  },
  {
    name: "Warm Gray",
    colors: [
      "#1C1917",
      "#292524",
      "#44403C",
      "#605E5C",
      "#787878",
      "#8E8D8A",
      "#A4A3A1",
      "#BEBEBE",
      "#D1D1D1",
      "#E3E3E3",
    ],
  },
  {
    name: "True Gray",
    colors: [
      "#171717",
      "#1E1E1E",
      "#252525",
      "#363636",
      "#525252",
      "#6B7280",
      "#83838F",
      "#9B9B9B",
      "#B2B2B2",
      "#D4D4D4",
    ],
  },
  {
    name: "Cool Gray",
    colors: [
      "#121212",
      "#161616",
      "#1B1B1B",
      "#292929",
      "#444444",
      "#6B6B6B",
      "#838383",
      "#9E9E9E",
      "#BDBDBD",
      "#E1E1E1",
    ],
  },
  {
    name: "Gray",
    colors: [
      "#111827",
      "#1F2937",
      "#323F4B",
      "#475569",
      "#64748B",
      "#7B8794",
      "#9AA5B1",
      "#CBD2D9",
      "#E4E7EB",
      "#F5F7FA",
    ],
  },
  {
    name: "Blue Gray",
    colors: [
      "#0F172A",
      "#1E293B",
      "#334155",
      "#475569",
      "#64748B",
      "#94A3B8",
      "#CBD5E1",
      "#E2E8F0",
      "#F1F5F9",
      "#F8FAFC",
    ],
  },
];

// Function to generate the color palette
function generateColorPalette() {
  const colorPalette = document.getElementById("colorPalette");

  colorData.forEach((palette) => {
    const paletteName = document.createElement("div");
    paletteName.classList.add("palette-name");
    paletteName.textContent = palette.name;
    colorPalette.appendChild(paletteName);

    palette.colors.forEach((color) => {
      const colorButton = document.createElement("button");
      colorButton.classList.add("color");
      colorButton.style.backgroundColor = color;
      colorButton.addEventListener("click", copyColorHexCode);
      colorPalette.appendChild(colorButton);
    });
  });
}

// // Function to copy color hex code to clipboard
// function copyColorHexCode(event) {
//   const colorButton = event.target;
//   const rgbColor = colorButton.style.backgroundColor;

//   // Convert RGB color to hex code
//   const hexColor = rgbToHex(rgbColor);

//   // Create a temporary textarea element to copy the color code
//   const textarea = document.createElement("textarea");
//   textarea.value = hexColor;

//   // Append the textarea to the document
//   document.body.appendChild(textarea);

//   // Select the text inside the textarea
//   textarea.select();

//   // Copy the selected text to the clipboard
//   document.execCommand("copy");

//   // Remove the temporary textarea
//   document.body.removeChild(textarea);

//   // Alert the user that the color code has been copied
//   alert(`Copied color code: ${hexColor}`);
// }

// // Function to convert RGB color to hex code
// function rgbToHex(rgb) {
//   const [r, g, b] = rgb.match(/\d+/g);
//   return `#${Number(r).toString(16)}${Number(g).toString(16)}${Number(
//     b
//   ).toString(16)}`;
// }

// // Generate the color palette when the page loads
// window.addEventListener("load", generateColorPalette);

// Function to generate the color palette
function generateColorPalette() {
  const colorPalette = document.getElementById("colorPalette");

  colorData.forEach((palette) => {
    const paletteName = document.createElement("div");
    paletteName.classList.add("palette-name");
    paletteName.textContent = palette.name;
    colorPalette.appendChild(paletteName);

    palette.colors.forEach((color) => {
      const colorButton = document.createElement("button");
      colorButton.classList.add("color");
      colorButton.style.backgroundColor = color;
      colorButton.addEventListener("click", copyColorCode);
      colorPalette.appendChild(colorButton);
    });
  });
}

// Function to copy color code to clipboard
function copyColorCode(event) {
  const colorButton = event.target;
  const selectedFormat = document.getElementById("colorFormat").value;
  let colorCode;

  switch (selectedFormat) {
    case "hex":
      colorCode = rgbToHex(getComputedStyle(colorButton).backgroundColor);
      break;
    case "rgb":
      colorCode = getComputedStyle(colorButton).backgroundColor;
      break;
    case "hsl":
      colorCode = rgbToHsl(getComputedStyle(colorButton).backgroundColor);
      break;
    default:
      colorCode = getComputedStyle(colorButton).backgroundColor;
  }

  // Create a temporary textarea element to copy the color code
  const textarea = document.createElement("textarea");
  textarea.value = colorCode;

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Select the text inside the textarea
  textarea.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Alert the user that the color code has been copied
  alert(`Copied color code: ${colorCode}`);
}

// Function to convert RGB color to hex code
function rgbToHex(rgb) {
  const [r, g, b] = rgb.match(/\d+/g);
  return `#${Number(r).toString(16).padStart(2, "0")}${Number(g)
    .toString(16)
    .padStart(2, "0")}${Number(b).toString(16).padStart(2, "0")}`;
}

// Function to convert RGB color to HSL code
function rgbToHsl(rgb) {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  const rRatio = r / 255;
  const gRatio = g / 255;
  const bRatio = b / 255;

  const max = Math.max(rRatio, gRatio, bRatio);
  const min = Math.min(rRatio, gRatio, bRatio);

  let h, s, l;

  const lightness = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rRatio:
        h = (gRatio - bRatio) / d + (gRatio < bRatio ? 6 : 0);
        break;
      case gRatio:
        h = (bRatio - rRatio) / d + 2;
        break;
      case bRatio:
        h = (rRatio - gRatio) / d + 4;
        break;
    }
    h /= 6;
  }

  const hInDegrees = Math.round(h * 360);
  const sInPercent = Math.round(s * 100);
  const lInPercent = Math.round(lightness * 100);

  return `hsl(${hInDegrees}, ${sInPercent}%, ${lInPercent}%)`;
}

// Generate the color palette when the page loads
window.addEventListener("load", generateColorPalette);
