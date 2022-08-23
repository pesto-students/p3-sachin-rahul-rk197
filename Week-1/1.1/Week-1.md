A.  Main Functionality of Browser is to interpret HTML.

B.  High Level Components of Browser are
        1. UI
        2. Browser Engine
        3. Networking
        4. Data Storage
        5. JS Interpreter

C.  Once a user requests a particular document. The Rendering Engine starts
    fetching the content of the requested document. This is Done By Networking Layer.
    Rendering Engine starts getting content in specific chunks of 8-kbs.

D.  HTML parse to Construct the DOM tree.

E.  Script processor runs an inline or stored script on incoming documents. 

    Script processor uses the script cache to avoid recompiling the script for each incoming document. To improve performance, ensure the script cache is properly sized before using a script processor in production.

F.  Tree Construction is handled with opening and closing tags. <HTML></HTML> is the main node of this
    tree. Element with no tag inside them are treated as last node.
 
G.  1. Normal if Script is not given Defer then it will load with the same order of page rendering.
    2. If the script is given async then it will not effect HTML page rendering. The script loading will be running parallel.
    3. If the script id given Defer it will be start getting loaded after the page id loaded completely.

H.  Layout :- The layout peace will be in charge to calculate the positions and dimensions of each node
    on the screen.

    Painting :- This is the stage where we know which elements are visible nad style of those elements.
    now this info will be passed to the last stage where each element in the tree is given actual pixel
    on the screen.
