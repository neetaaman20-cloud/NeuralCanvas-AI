# NeuralCanvas AI: Real-time Image Pre-processor 🎨

NeuralCanvas is an interactive web application built with **HTML5 Canvas** and **JavaScript** designed to bridge the gap between human drawing and Machine Learning data. It captures user-drawn digits and processes them into a normalized $28 \times 28$ pixel grid, identical to the format used by the world-standard **MNIST** dataset.

## 🚀 Features
* **High-Resolution Drawing:** A smooth $280 \times 280$ drawing area with optimized mouse event handling.
* **Real-time Downscaling:** Uses the Canvas API to transform high-res art into a $28 \times 28$ matrix.
* **Live AI Preview:** A secondary "AI View" canvas that displays the exact data a neural network would see.
* **Data Extraction:** Converts visual input into a numerical array (`Uint8ClampedArray`) ready for model inference.

## 🛠️ Tech Stack
* **HTML5:** Semantic structure and Canvas API for graphical rendering.
* **CSS3:** Responsive Flexbox layout and professional UI styling.
* **JavaScript (ES6):** Logic for coordinate calculation, image processing, and state management.

## 📖 How It Works
1.  **Input:** The user draws a digit on the main black canvas.
2.  **Mapping:** JavaScript calculates precise mouse coordinates using `getBoundingClientRect()` to ensure accuracy across different screen sizes.
3.  **Normalization:** Upon clicking "Predict," the script uses `drawImage()` to downsample the $280 \times 280$ image into a $28 \times 28$ preview.
4.  **Output:** The `getImageData()` method extracts the raw pixel values, which are logged to the console for verification.

## 🖥️ Local Setup
To run this project locally, clone the repository and start a simple server:

```bash
# Navigate to the project folder
cd NeuralCanvas

# Start a local server (Python 3)
python3 -m http.server 8000
