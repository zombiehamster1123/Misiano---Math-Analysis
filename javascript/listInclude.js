var page = $('#page');
var panel = ('<div data-role="panel" id="panelWrapper" data-position="right" data-display="overlay" data-dismissible="false"><ul data-role="listview" id="panelScroller"></ul></div>');
var nav = ('<nav id="navWrapper"><ul data-role="listview" id="navScroller"></ul></nav> ');
var head = ('<div data-role="header" id="head" data-theme="b"><a href="#panelWrapper" id="panelBtn">Lessons</a><a href="index.html" data-rel="back">Back</a><h1>Math Analysis</h1></div>');
var foot = ('<div class="ui-bar-c" id="footer-bar" data-position="fixed" data-tap-toggle="false"><div data-role="navbar"><ul><li><a href="../index.html" data-ajax="false">Home</a></li><li><a href="../formulas/formulas.html" data-ajax="false">Formulas</a></li><li><a href="../formulas/homework.html" data-ajax="false">Homework</a></li><li><a href="../formulas/videoList.html" data-ajax="false">Videos</a></li></ul></div></div>');
var layout = nav.concat(head, foot, panel);

var list1 = ['<li><a href="../lessons/relationsAndFunctions.html" data-ajax="false">Linear Relations & Functions</a></li>'];
var list2 = ['<li><a href="../lessons/ratesOfChange.html" data-ajax="false">Rates of Change</a></li>'];
var list3 = ['<li><a href="../lessons/compositionOfFunctions.html" data-ajax="false">Composition & Inverses of Functions</a></li>'];
var list4 = ['<li><a href="../lessons/linearFunctions.html" data-ajax="false">Linear Functions & Inequalities</a></li>'];
var list5 = ['<li><a href="../lessons/distance&Slope.html" data-ajax="false">Distance & Slope</a></li>'];
var list6 = ['<li><a href="../lessons/cartesianPlane.html" data-ajax="false">Cartesian Plane</a></li>'];
var list7 = ['<li><a href="../lessons/formsOfLinearEquations.html" data-ajax="false">Forms of Linear Equations</a></li>'];
var list8 = ['<li><a href="../lessons/parallel&Perpendicular.html" data-ajax="false">Parallel & Perpendicular</a></li>'];
var list9 = ['<li><a href="../lessons/solvingSystemsOfEquations.html" data-ajax="false">Solving Systems of Equations</a></li>'];
var list10 = ['<li><a href="../lessons/introductionToMatrices.html" data-ajax="false">Introduction to Matrices</a></li>'];
var list11 = ['<li><a href="../lessons/multiplyingMatrices.html" data-ajax="false">Multiplying Matrices</a></li>'];
var list12 = ['<li><a href="../lessons/determinants.html" data-ajax="false">Determinants</a></li>'];
var list13 = ['<li><a href="../lessons/multiplicativeInverse.html" data-ajax="false">Multiplicative Inverse</a></li>'];
var list14 = ["<li><a href='../lessons/cramersRule.html' data-ajax='false'>Cramer's Rule</a></li>"];
var list15 = ['<li><a href="../lessons/solvingSystemsOfInequalities.html" data-ajax="false">Solving Systems of Inequalities</a></li>'];
var list16 = ['<li><a href="../lessons/linearProgramming.html" data-ajax="false">Linear Programming</a></li>'];
var list17 = ['<li><a href="../lessons/symmetry.html" data-ajax="false">Symmetry</a></li>'];
var list18 = ['<li><a href="../lessons/familiesOfCurves.html" data-ajax="false">Families of Curves</a></li>'];
var list19 = ['<li><a href="../lessons/inverseFunctions&Relations.html" data-ajax="false">Inverse Functions & Relations</a></li>'];
var list20 = ['<li><a href="../lessons/rationalFunctions&Asymptotes.html" data-ajax="false">Rational Functions & Asymptotes</a></li>'];
var list21 = ['<li><a href="../lessons/tangetToACurve.html" data-ajax="false">Tangent to a Curve</a></li>'];
var list22 = ['<li><a href="../lessons/graph&CriticalPoints.html" data-ajax="false">Graph & Critical Points</a></li>'];
var list23 = ['<li><a href="../lessons/continuity&EndBehavior.html" data-ajax="false">Continuity & End Behavior</a></li>'];
var list24 = ['<li><a href="../lessons/polynomialFunctions.html" data-ajax="false">Polynomial Functions</a></li>'];
var list25 = ['<li><a href="../lessons/quadraticEquations.html" data-ajax="false">Quadratic Equations</a></li>'];
var list26 = ['<li><a href="../lessons/remainder&FactorTheorems.html" data-ajax="false">Remainder & Factor Theorems</a></li>'];
var list27 = ['<li><a href="../lessons/rationalRootTheorem.html" data-ajax="false">Rational Root Theorem</a></li>'];
var list28 = ['<li><a href="../lessons/ratioanlEquations.html" data-ajax="false">Rational Equations & Partial Fractions</a></li>'];
var list29 = ['<li><a href="../lessons/radicalEquations&Inequalities.html" data-ajax="false">Radical Equations & Inequalities</a></li>'];
var list30 = ['<li><a href="../lessons/lawOfSines.html" data-ajax="false">Law of Sines</a></li>'];
var list31 = ['<li><a href="../lessons/lawOfCosines.html" data-ajax="false">Law of Cosines</a></li>'];
var list32 = ['<li><a href="../lessons/areaOfTriangle.html" data-ajax="false">Area of Triangle</a></li>'];
var list33 = ['<li><a href="../lessons/geometricVectors.html" data-ajax="false">Geometric Vectors</a></li>'];
var list34 = ['<li><a href="../lessons/algebraicVectors.html" data-ajax="false">Algabraic Vectors</a></li>'];
var list35 = ['<li><a href="../lessons/3dVectors.html" data-ajax="false">Vectors in 3D Space</a></li>'];
var list36 = ['<li><a href="../lessons/perpendicularVectors.html" data-ajax="false">Perpendicular Vectors</a></li>'];
var list37 = ['<li><a href="../lessons/vectors&ParametricEquations.html" data-ajax="false">Vectors & Parametric Equations</a></li>'];
var list38 = ['<li><a href="../lessons/polarCoordinates.html" data-ajax="false">Polar Coordinates</a></li>'];
var list39 = ['<li><a href="../lessons/circle.html" data-ajax="false"> The Circle</a></li>'];
var list40 = ['<li><a href="../lessons/parabola.html" data-ajax="false">The Parabola</a></li>'];
var list41 = ['<li><a href="../lessons/ellipse.html" data-ajax="false">The Ellipse</a></li>'];
var list42 = ['<li><a href="../lessons/hyperbola.html" data-ajax="false">The Hyperbola</a></li>'];
var list43 = ['<li><a href="../lessons/conicTransformations.html" data-ajax="false">Transformation of Conic</a></li>'];
var list44 = ['<li><a href="../lessons/tangentsToConicSection.html" data-ajax="false">Tangents & Normals to the Conic Sections</a></li>'];
var list45 = ['<li><a href="../lessons/systemsOfSecondDegree.html" data-ajax="false">System of 2nd Degree Equations & Inequalities</a></li>'];
var list46 = ['<li><a href="../lessons/rationalExponents.html" data-ajax="false">Rational Exponents</a></li>'];
var list48 = ['<li><a href="../lessons/numberE.html" data-ajax="false">Number e</a></li>'];
var list49 = ['<li><a href="../lessons/logarithmicFunctions.html" data-ajax="false">Logarithmic Functions</a></li>'];
var list50 = ['<li><a href="../lessons/exp&LogEquations.html" data-ajax="false">Exponent & Log Equations & Inequalities</a></li>'];
var list51 = ['<li><a href="../lessons/naturalLogs.html" data-ajax="false">Natrual Logarithms</a></li>'];
var list52 = ['<li><a href="../lessons/arithmeticSequences.html" data-ajax="false">Arithmetic Sequences & Series</a></li>'];
var list53 = ['<li><a href="../lessons/geometricSequences.html" data-ajax="false">Geometric Sequences & Series</a></li>'];
var list54 = ['<li><a href="../lessons/infiniteSequences.html" data-ajax="false">Infinite Sequences & Series</a></li>'];
var list55 = ['<li><a href="../lessons/convergent&DivergentSeries.html" data-ajax="false">Convergent & Divergent Series</a></li>'];
var list56 = ['<li><a href="../lessons/sigmaNotation.html" data-ajax="false">Sigma Notation & the nth Term</a></li>'];
var list57 = ['<li><a href="../lessons/binomialTheorem.html" data-ajax="false">Binomial Theorem</a></li>'];
var list58 = ['<li><a href="../lessons/specialSequences.html" data-ajax="false">Special Sequences & Series</a></li>'];
var list59 =['<li><a href="../lessons/graphsOfPolarEquations.html" data-ajax="false">Graphs of Polar Equations</a></li>'];
var list60 =['<li><a href="../lessons/polar&RectangularCoordinates.html" data-ajax="false">Polar & Rectangular Coordinates</a></li>'];
var list61 =['<li><a href="../lessons/simplifyingComplexNumber.html" data-ajax="false">Simplifying Complex Numbers</a></li>'];
var list62 =['<li><a href="../lessons/polarFormOfComplexNumbers.html" data-ajax="false">Polar Form of Complex Numbers</a></li>'];
var list63 =['<li><a href="../lessons/products&QuotientofComplex.html" data-ajax="false">Products & Quotients of Complex Numbers in Polar Form</a></li>'];
var list64 =['<li><a href="../lessons/powers&RootsOfComplexNumbers.html" data-ajax="false">Powers & Roots of Complex Numbers</a></li>'];

var title1=['<li data-role="list-divider">Unit 1</li>'];
var title2=['<li data-role="list-divider">Unit 2</li>'];
var title3=['<li data-role="list-divider">Unit 3</li>'];
var title4=['<li data-role="list-divider">Unit 4</li>'];
var title5=['<li data-role="list-divider">Unit 5</li>'];
var title6=['<li data-role="list-divider">Unit 8</li>'];
var title7=['<li data-role="list-divider">Unit 9</li>'];
var title8=['<li data-role="list-divider">Unit 10</li>'];
var title9=['<li data-role="list-divider">Unit 11</li>'];
var title10=['<li data-role="list-divider">Unit 12</li>'];

var entireList = title1.concat(list1, list2, list3, list4, list5, list6, list7, list8, title2, list9, list10, list11, list12, list13, list14, list15, list16, title3, list17, list18, list19, list20, list21, list22, list23, title4, list24, list25, list26, list27, list28, list29, title5, list30, list31, list32, title6, list33, list34, list35, list36, list37, title7, list38, list59, list60, list61, list62, list63, list64, title8, list39, list40, list41, list42, list43, list44, title9, list45, list46, list48, list49, list50, list51, title10, list52, list53, list54, list55, list56, list57, list58);

page.append(layout);
var navScroll = $('#navScroller');
navScroll.append(entireList);
var panelScroll = $('#panelScroller');
panelScroll.append(entireList);

var scrollContent,
	scrollNav,
	scrollPanel;
/*var scrollNav;*/

function loaded() {
	scrollContent = new iScroll('contentWrapper', {hScroll: true});
	scrollNav = new iScroll('navWrapper');
	scrollPanel = new iScroll('panelWrapper');
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);