document.addEventListener("DOMContentLoaded", function() {
    const draggables = document.querySelectorAll('.draggable');
    const droppables = document.querySelectorAll('.droppable');
    const messageDiv = document.getElementById('message');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    droppables.forEach(droppable => {
        droppable.addEventListener('dragover', dragOver);
        droppable.addEventListener('drop', drop);
    });

    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const draggableElementId = event.dataTransfer.getData("text");
        const draggableElement = document.getElementById(draggableElementId);
        const dropzone = event.target;

        if (draggableElement && dropzone) {
            const draggableWidth = draggableElement.width;
            const draggableHeight = draggableElement.height;
            const dropzoneWidth = dropzone.width;
            const dropzoneHeight = dropzone.height;

            if (draggableWidth === dropzoneWidth && draggableHeight === dropzoneHeight) {
                messageDiv.textContent = "The images are of the same size.";
                messageDiv.style.color = "green";
            } else {
                messageDiv.textContent = "The images are not of the same size.";
                messageDiv.style.color = "red";
            }
        }
    }
});