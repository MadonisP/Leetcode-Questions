/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function (image, sr, sc, color) {
    const currentColor = image[sr][sc]
    if (color === currentColor) return image;

    function call(img, r, c) {
        if (r >= img.length || r < 0 || c >= img[0].length || c < 0 || (currentColor !== img[r][c])) return
        img[r][c] = color
        call(img, r - 1, c)
        call(img, r + 1, c)
        call(img, r, c - 1)
        call(img, r - 1, c + 1)
        return img
    }
    return call(image, sr, sc);
};

/* ----------------------------------------------------Question--------------------------------------------------------------*/

/* 
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
*/

/* ----------------------------------------------------Example--------------------------------------------------------------*/

/* 
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.
*/
