document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       START BUTTON
    ========================= */

    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", function () {

            const typesSection = document.getElementById("types");

            if (typesSection) {
                typesSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }


    /* =========================
       PROSTHETIC TYPE
    ========================= */

    const partButtons =
        document.querySelectorAll(".select-part");

    const selectedPart =
        document.getElementById("selectedPart");

    partButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            partButtons.forEach(function (item) {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

            const part =
                button.getAttribute("data-part");

            if (selectedPart) {

                selectedPart.textContent =
                    "تم اختيار: " + part;

            }

        });

    });


    /* =========================
       COMPANY
    ========================= */

    const companyButtons =
        document.querySelectorAll(".select-company");

    const selectedCompany =
        document.getElementById("selectedCompany");

    companyButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            companyButtons.forEach(function (item) {
                item.classList.remove("selected");
            });

            button.classList.add("selected");

            const company =
                button.getAttribute("data-company");

            if (selectedCompany) {

                selectedCompany.textContent =
                    "تم اختيار الشركة: " + company;

            }

        });

    });


    /* =========================
       THREE.JS 3D MODEL
    ========================= */

    const modelContainer =
        document.getElementById("modelContainer");

    let scene;
    let camera;
    let renderer;
    let model;

    let rotation = 0;


    if (
        modelContainer &&
        typeof THREE !== "undefined"
    ) {

        /* SCENE */

        scene = new THREE.Scene();

        scene.background =
            new THREE.Color(0xe8f5f7);


        /* CAMERA */

        camera = new THREE.PerspectiveCamera(
            45,
            modelContainer.clientWidth /
            modelContainer.clientHeight,
            0.1,
            1000
        );

        camera.position.set(
            3.5,
            2.5,
            5
        );


        /* RENDERER */

        renderer =
            new THREE.WebGLRenderer({
                antialias: true
            });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        renderer.setSize(
            modelContainer.clientWidth,
            modelContainer.clientHeight
        );

        modelContainer.appendChild(
            renderer.domElement
        );


        /* LIGHT */

        const ambientLight =
            new THREE.AmbientLight(
                0xffffff,
                1.8
            );

        scene.add(ambientLight);


        const mainLight =
            new THREE.DirectionalLight(
                0xffffff,
                2
            );

        mainLight.position.set(
            4,
            6,
            5
        );

        scene.add(mainLight);


        const secondLight =
            new THREE.DirectionalLight(
                0x8ed1df,
                1.2
            );

        secondLight.position.set(
            -4,
            2,
            -3
        );

        scene.add(secondLight);


        /* MODEL GROUP */

        model = new THREE.Group();

        scene.add(model);


        /* MATERIALS */

        const blueMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x176b87,
                metalness: 0.25,
                roughness: 0.35
            });


        const lightBlueMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x55a1b0,
                metalness: 0.2,
                roughness: 0.4
            });


        const metalMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x9aaeb4,
                metalness: 0.75,
                roughness: 0.25
            });


        const darkMaterial =
            new THREE.MeshStandardMaterial({
                color: 0x405b64,
                metalness: 0.8,
                roughness: 0.2
            });


        /* SOCKET */

        const socketGeometry =
            new THREE.CylinderGeometry(
                0.65,
                0.48,
                1.35,
                32
            );

        const socket =
            new THREE.Mesh(
                socketGeometry,
                blueMaterial
            );

        socket.position.y = 1.7;

        model.add(socket);


        /* INNER SOCKET */

        const innerGeometry =
            new THREE.CylinderGeometry(
                0.48,
                0.36,
                0.95,
                32
            );

        const innerSocket =
            new THREE.Mesh(
                innerGeometry,
                lightBlueMaterial
            );

        innerSocket.position.y = 1.7;

        model.add(innerSocket);


        /* JOINT */

        const jointGeometry =
            new THREE.SphereGeometry(
                0.38,
                32,
                32
            );

        const joint =
            new THREE.Mesh(
                jointGeometry,
                darkMaterial
            );

        joint.position.y = 0.8;

        model.add(joint);


        /* JOINT RING */

        const ringGeometry =
            new THREE.TorusGeometry(
                0.38,
                0.08,
                16,
                32
            );

        const ring =
            new THREE.Mesh(
                ringGeometry,
                metalMaterial
            );

        ring.rotation.x =
            Math.PI / 2;

        ring.position.y = 0.8;

        model.add(ring);


        /* SHAFT */

        const shaftGeometry =
            new THREE.CylinderGeometry(
                0.18,
                0.23,
                1.55,
                24
            );

        const shaft =
            new THREE.Mesh(
                shaftGeometry,
                metalMaterial
            );

        shaft.position.y = -0.15;

        model.add(shaft);


        /* CONNECTOR */

        const connectorGeometry =
            new THREE.CylinderGeometry(
                0.27,
                0.27,
                0.25,
                24
            );

        const connector =
            new THREE.Mesh(
                connectorGeometry,
                darkMaterial
            );

        connector.position.y = -0.95;

        model.add(connector);


        /* FOOT */

        const footGeometry =
            new THREE.BoxGeometry(
                1.55,
                0.35,
                2.25
            );

        const foot =
            new THREE.Mesh(
                footGeometry,
                blueMaterial
            );

        foot.position.set(
            0,
            -1.25,
            0.35
        );

        model.add(foot);


        /* FOOT TOP */

        const footTopGeometry =
            new THREE.BoxGeometry(
                1.25,
                0.22,
                1.55
            );

        const footTop =
            new THREE.Mesh(
                footTopGeometry,
                lightBlueMaterial
            );

        footTop.position.set(
            0,
            -1.05,
            0.25
        );

        model.add(footTop);


        /* SCREWS */

        for (let i = 0; i < 4; i++) {

            const screwGeometry =
                new THREE.CylinderGeometry(
                    0.045,
                    0.045,
                    0.18,
                    16
                );

            const screw =
                new THREE.Mesh(
                    screwGeometry,
                    darkMaterial
                );

            const angle =
                (Math.PI * 2 / 4) * i;

            screw.position.x =
                Math.cos(angle) * 0.35;

            screw.position.z =
                Math.sin(angle) * 0.35;

            screw.position.y = 1.12;

            model.add(screw);
        }


        /* MODEL POSITION */

        model.position.y = 0.2;


        /* =========================
           ROTATION BUTTONS
        ========================= */

        const leftButton =
            document.getElementById("leftButton");

        const rightButton =
            document.getElementById("rightButton");

        const resetButton =
            document.getElementById("resetButton");


        if (leftButton) {

            leftButton.addEventListener(
                "click",
                function () {

                    rotation -= 0.5;

                    model.rotation.y =
                        rotation;

                }
            );

        }


        if (rightButton) {

            rightButton.addEventListener(
                "click",
                function () {

                    rotation += 0.5;

                    model.rotation.y =
                        rotation;

                }
            );

        }


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                function () {

                    rotation = 0;

                    model.rotation.set(
                        0,
                        0,
                        0
                    );

                }
            );

        }


        /* =========================
           MOUSE ROTATION
        ========================= */

        let dragging = false;
        let previousX = 0;


        modelContainer.addEventListener(
            "mousedown",
            function (event) {

                dragging = true;

                previousX =
                    event.clientX;

            }
        );


        window.addEventListener(
            "mouseup",
            function () {

                dragging = false;

            }
        );


        modelContainer.addEventListener(
            "mousemove",
            function (event) {

                if (!dragging) {
                    return;
                }

                const difference =
                    event.clientX - previousX;

                rotation +=
                    difference * 0.01;

                model.rotation.y =
                    rotation;

                previousX =
                    event.clientX;

            }
        );


        /* =========================
           TOUCH ROTATION
        ========================= */

        let previousTouchX = 0;


        modelContainer.addEventListener(
            "touchstart",
            function (event) {

                if (event.touches.length > 0) {

                    previousTouchX =
                        event.touches[0].clientX;

                }

            },
            {
                passive: true
            }
        );


        modelContainer.addEventListener(
            "touchmove",
            function (event) {

                if (event.touches.length > 0) {

                    const currentX =
                        event.touches[0].clientX;

                    const difference =
                        currentX - previousTouchX;

                    rotation +=
                        difference * 0.01;

                    model.rotation.y =
                        rotation;

                    previousTouchX =
                        currentX;

                }

            },
            {
                passive: true
            }
        );


        /* =========================
           RESIZE
        ========================= */

        window.addEventListener(
            "resize",
            function () {

                if (!camera || !renderer) {
                    return;
                }

                const width =
                    modelContainer.clientWidth;

                const height =
                    modelContainer.clientHeight;

                camera.aspect =
                    width / height;

                camera.updateProjectionMatrix();

                renderer.setSize(
                    width,
                    height
                );

            }
        );


        /* =========================
           ANIMATION
        ========================= */

        function animate() {

            requestAnimationFrame(
                animate
            );

            renderer.render(
                scene,
                camera
            );

        }

        animate();

    }


    /* =========================
       REPAIR INFORMATION
    ========================= */

    const repairButtons =
        document.querySelectorAll(
            ".repair-button"
        );

    const repairInfo =
        document.getElementById(
            "repairInfo"
        );


    const repairData = {

        "المفصل":
            "<strong>المفصل:</strong> قد تظهر مشكلات مثل صعوبة الحركة أو عدم ثبات المفصل. يختلف التعامل مع المشكلة حسب نوع المفصل وتصميم الطرف.",

        "المسامير":
            "<strong>المسامير والوصلات:</strong> قد تحتاج الوصلات إلى الفحص عند حدوث ارتخاء أو تغير في ثبات المكونات. يجب استخدام القطع المناسبة للطراز.",

        "الأصابع":
            "<strong>الأصابع:</strong> في بعض الأطراف الصناعية العلوية قد تحدث مشكلات في حركة الأصابع أو آلية التحكم بها.",

        "نظام التعليق":
            "<strong>نظام التعليق:</strong> يساعد على تثبيت الطرف الصناعي. قد يحتاج إلى فحص عند الشعور بعدم الثبات أو تغير ملاءمة الطرف."

    };


    repairButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const repairPart =
                    button.getAttribute(
                        "data-repair"
                    );

                if (
                    repairInfo &&
                    repairData[repairPart]
                ) {

                    repairInfo.innerHTML =
                        repairData[repairPart];

                }

            }
        );

    });


    /* =========================
       PART DETAILS
    ========================= */

    const detailsButtons =
        document.querySelectorAll(
            ".details-button"
        );


    const detailsData = {

        "نظام التعليق":
            "نظام التعليق يساعد على تثبيت الطرف الصناعي والمحافظة على اتصاله بشكل مناسب. تختلف آليته حسب نوع الطرف.",

        "المفصل":
            "المفصل يسمح بالحركة بين أجزاء الطرف الصناعي، ويختلف تصميمه حسب نوع الطرف ووظيفته.",

        "الأصابع":
            "الأصابع من المكونات الموجودة في بعض الأطراف الصناعية العلوية، وقد تكون ثابتة أو متحركة حسب التصميم.",

        "المسامير":
            "المسامير والوصلات تستخدم لربط مكونات الطرف الصناعي وتثبيتها."
    };


    detailsButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const part =
                    button.getAttribute(
                        "data-details"
                    );

                if (detailsData[part]) {

                    alert(
                        detailsData[part]
                    );

                }

            }
        );

    });


    /* =========================
       SPECIALIST FORM
    ========================= */

    const specialistForm =
        document.getElementById(
            "specialistForm"
        );

    const formMessage =
        document.getElementById(
            "formMessage"
        );


    if (specialistForm) {

        specialistForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const limb =
                    document.getElementById(
                        "limb"
                    ).value;

                const problem =
                    document.getElementById(
                        "problem"
                    ).value;

                const description =
                    document.getElementById(
                        "description"
                    ).value;


                if (
                    !limb ||
                    !problem ||
                    !description
                ) {

                    if (formMessage) {

                        formMessage.textContent =
                            "يرجى تعبئة البيانات المطلوبة.";

                    }

                    return;

                }


                if (formMessage) {

                    formMessage.textContent =
                        "تم تسجيل طلبك بشكل تجريبي.";

                }


                specialistForm.reset();

            }
        );

    }


    /* =========================
       NAVIGATION
    ========================= */

    const navigationLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navigationLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    targetId &&
                    targetId.startsWith("#")
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    });

});