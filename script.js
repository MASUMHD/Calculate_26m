function CalculateTriangle (){

    // document.getElementById('card-1').addEventListener('mousemove', function(){
    //     document.body.style.backgroundColor = 'goldenrod';
    // })

    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);


    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    const Calculate = 0.5 * base * height;
    console.log(Calculate);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = Calculate;

    
}

function CalculateRectangle (){
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseText = rectangleBaseInput.value;
    const base = parseFloat(rectangleBaseText);
    console.log(base);

    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightTex = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeightTex);
    console.log(height);

    const Calculate = base * height;
    console.log(Calculate);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = Calculate;
}

function CalculateParallelogram(){
    const ParallelogramBaseInput = document.getElementById('Parallelogram-base');
    const ParallelogramBaseText = ParallelogramBaseInput.value;
    const base = parseFloat(ParallelogramBaseText);
    console.log(base);

    const ParallelogramHeightInput = document.getElementById('Parallelogram-height');
    const ParallelogramHeightTex = ParallelogramHeightInput.value;
    const height = parseFloat(ParallelogramHeightTex);
    console.log(height);

    const Calculate = base * height;
    console.log(Calculate);

    const ParallelogramAreaSpan = document.getElementById('Parallelogram-area');
    ParallelogramAreaSpan.innerText = Calculate;
}

function CalculateRhombus(){
    const RhombusBaseInput = document.getElementById('Rhombus-base');
    const RhombusBaseText = RhombusBaseInput.value;
    const base = parseFloat(RhombusBaseText);
    console.log(base);

    const RhombusHeightInput = document.getElementById('Rhombus-height');
    const RhombusHeightTex = RhombusHeightInput.value;
    const height = parseFloat(RhombusHeightTex);
    console.log(height);

    const Calculate = base * height;
    console.log(Calculate);

    const RhombusAreaSpan = document.getElementById('Rhombus-area');
    RhombusAreaSpan.innerText = Calculate;
}

function CalculatePentagon(){
    const PentagonBaseInput = document.getElementById('Pentagon-base');
    const PentagonBaseText = PentagonBaseInput.value;
    const base = parseFloat(PentagonBaseText);
    console.log(base);

    const PentagonHeightInput = document.getElementById('Pentagon-height');
    const PentagonHeightTex = PentagonHeightInput.value;
    const height = parseFloat(PentagonHeightTex);
    console.log(height);

    const Calculate = 0.5 * base * height;
    console.log(Calculate);

    const PentagonAreaSpan = document.getElementById('Pentagon-area');
    PentagonAreaSpan.innerText = Calculate;
}

function CalculateEllipse(){
    const EllipseBaseInput = document.getElementById('Ellipse-base');
    const EllipseBaseText = EllipseBaseInput.value;
    const base = parseFloat(EllipseBaseText);
    console.log(base);

    const EllipseHeightInput = document.getElementById('Ellipse-height');
    const EllipseHeightTex = EllipseHeightInput.value;
    const height = parseFloat(EllipseHeightTex);
    console.log(height);

    const Calculate =  3.1415 * base * height;
    console.log(Calculate);

    const EllipseAreaSpan = document.getElementById('Ellipse-area');
    EllipseAreaSpan.innerText = Calculate;
}


