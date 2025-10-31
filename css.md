# Styling and CSS Guide for HPC Docs
This file serves the purpose of highlighting the signifcant modifcations done in the CSS or other styling files(custom.css files, embedded html files and other stlyling formats to adhere.)


## `custom.css`
The `custom.css` file holds all of the customizations done on the css-side of things that differ from the base Docsusaurus build configuration. 

### Some of the configurations 
1. Hyperlink has a turquoise color
2. Tabs now have a border that allows them to be easily identifiable and acts as the line highlighting where the tab or dropdown ends. 

| Selector                       | Purpose                       | Visual Effect                                                                    |
| ------------------------------ | ----------------------------- | -------------------------------------------------------------------------------- |
| `.tabs-container`              | Main container for tab groups | 3px bordered container with rounded corners, light background, and subtle shadow |
| `.tabs__item`                  | Individual tab styling        | Bold, 20% larger text with padding and cursor feedback                           |
| `.tabs__item` (display)        | Tab layout control            | Inline display with spacing between tabs                                         |
| `.tabs__item:hover`            | Interactive feedback          | Background color change with shadow on hover                                     |
| `.tabs__item--active`          | Active tab indicator          | Distinct background color with shadow effect                                     |
| `.tabs__content`               | Content area styling          | 3px top border with internal padding                                             |
| `.tabs__item--active` (border) | Active tab emphasis           | 5px bottom border in the theme's active color                                    |

3. Custom color themes inspired by the UC Merced Colors. 

4. Customization for video handling.

| Selector                  | Purpose                   | Visual Effect                                           |
| ------------------------- | ------------------------- | ------------------------------------------------------- |
| `.video-container`        | Responsive video wrapper  | Full-width container with 16:9 aspect ratio             |
| `.video-container iframe` | Video element positioning | Absolute positioning with full dimensions and no border |

5. Customization of the colors for `quote block` and `note` 
| Selector                  | Purpose                   | Visual Effect                                           |
| ------------------------- | ------------------------- | ------------------------------------------------------- |
| `.lockquote`        | make quote purple  | Purple quote block       |
| `.admonition.note` | make note orange | Orange tint to note blocks |


## Link to `custom.css`
`src/css/custom.css`

