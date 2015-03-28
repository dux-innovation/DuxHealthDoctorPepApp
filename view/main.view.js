sap.ui
    .jsview(
        "view.main",
        {

            /**
             * Specifies the Controller belonging to this View. In the
             * case that it is not implemented, or that "null" is
             * returned, this View does not have a Controller.
             *
             * @memberOf view.main
             */
            getControllerName: function()
            {
                return "view.main";
            },

            /**
             * Is initially called once after the Controller has been
             * instantiated. It is the place where the UI is
             * constructed. Since the Controller is given to this
             * method, its event handlers can be attached right away.
             *
             * @memberOf view.main
             */
            createContent: function(oController)
            {

                var oLayout1 = new sap.ui.layout.form.ResponsiveGridLayout(
                    "L1");

                var oForm1 = new sap.ui.layout.form.Form(
                    "F1",
                    {
                        layout: oLayout1,
                        formContainers: [
                            new sap.ui.layout.form.FormContainer("F1C0",
                            {
                                title: "Dados Pessoais",
                                formElements: [
                                    new sap.ui.layout.form.FormElement(
                                    {
                                        fields: [
                                            new sap.ui.commons.Image(
                                            {
                                                src: "images/person2.jpg",
                                                width: "200px",
                                                layoutData: new sap.ui.core.VariantLayoutData(
                                                {
                                                    multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData(
                                                        {
                                                            minWidth: 200
                                                        }),
                                                        new sap.ui.layout.form.GridElementData(
                                                        {
                                                            hCells: "1",
                                                            vCells: 1
                                                        }),
                                                        new sap.ui.layout.GridData(
                                                        {
                                                            span: "L3 M3 S12"
                                                        })
                                                    ]
                                                })
                                            }),
                                        ]
                                    })
                                ]
                            }),

                            new sap.ui.layout.form.FormContainer("F1C1",
                            {
                                formElements: [
                                    new sap.ui.layout.form.FormElement(
                                    {
                                        label: "Nome",
                                        fields: [
                                            new sap.ui.commons.TextField(
                                            {
                                                value: "Luciano Leite",
                                                editable: false,
                                            }),

                                        ],

                                    }),

                                    new sap.ui.layout.form.FormElement(
                                    {
                                        label: "Idade",
                                        fields: [
                                            new sap.ui.commons.TextField(
                                            {
                                                value: "35 anos",
                                                editable: false,
                                            }),

                                        ],

                                    }),
                                ],
                                layoutData: new sap.ui.core.VariantLayoutData(
                                {
                                    multipleLayoutData: [new sap.ui.layout.GridData(
                                    {
                                        span: "L6 M6 S6"
                                    })]
                                })
                            }),

                            new sap.ui.layout.form.FormContainer(
                                "F1C2",
                                {
                                    title: "Sinais Vitais",
                                    formElements: [
                                        new sap.ui.layout.form.FormElement(
                                        {
                                            label: "Temperatura",
                                            fields: [new sap.ui.commons.Slider(
                                            {
                                                min: 35, // float
                                                max: 45, // float
                                                value: 38, // float
                                                smallStepWidth: 0.1, // float
                                                // totalUnits
                                                // : ,
                                                // //
                                                // int
                                                stepLabels: true, // boolean
                                                labels: [
                                                    "35",
                                                    "40",
                                                    "45"
                                                ]
                                                // string[]

                                            })]
                                        }),

                                        new sap.ui.layout.form.FormElement(
                                        {
                                            label: "Pulso",
                                            fields: [new sap.ui.commons.Slider(
                                            {
                                                min: 40, // float
                                                max: 180, // float
                                                value: 80, // float
                                                smallStepWidth: 1, // float
                                                // totalUnits
                                                // : ,
                                                // //
                                                // int
                                                stepLabels: true, // boolean
                                                labels: [
                                                    "40",
                                                    "180"
                                                ]
                                                // string[]
                                            })]
                                        }),

                                        new sap.ui.layout.form.FormElement(
                                        {
                                            label: "Respiração",
                                            fields: [new sap.ui.commons.Slider(
                                            {
                                                min: 8, // float
                                                max: 70, // float
                                                value: 15, // float
                                                smallStepWidth: 1, // float
                                                stepLabels: true, // boolean
                                                labels: [
                                                    "8",
                                                    "70"
                                                ]
                                                // string[]
                                            })]
                                        }),

                                        new sap.ui.layout.form.FormElement(
                                        {
                                            label: "Pressão",
                                            fields: [
                                                new sap.ui.commons.Slider(
                                                {
                                                    min: 80, // float
                                                    max: 200, // float
                                                    value: 140, // float
                                                    smallStepWidth: 1, // float
                                                    stepLabels: true, // boolean
                                                    labels: [
                                                        "80",
                                                        "200"
                                                    ]
                                                }),

                                                new sap.ui.commons.Slider(
                                                {
                                                    min: 50, // float
                                                    max: 120, // float
                                                    value: 70, // float
                                                    smallStepWidth: 1, // float
                                                    stepLabels: true, // boolean
                                                    labels: [
                                                        "50",
                                                        "120"
                                                    ]
                                                }),

                                            ]
                                        }),

                                    ]
                                }),
                            new sap.ui.layout.form.FormContainer(
                                "F1C21",
                                {
                                    title: "Queixas",
                                    formElements: [new sap.ui.layout.form.FormElement(
                                    {
                                        fields: [new sap.ui.commons.TextArea(
                                        {
                                            value: "O paciente queixa-se de "
                                        })]
                                    })]
                                }),
                            new sap.ui.layout.form.FormContainer(
                                "F1C3",
                                {
                                    title: "Diagnóstico",
                                    formElements: [new sap.ui.layout.form.FormElement(
                                    {
                                        label: "CID-10",
                                        fields: [new sap.ui.commons.ComboBox(
                                        {
                                            // value:
                                            // "{/cid10/0/capitulo/nome}",
                                            items:
                                            {
                                                path: "/",
                                                template: new sap.ui.core.ListItem(
                                                {
                                                    text: "{}"
                                                })
                                            }
                                        })]
                                    })]
                                }),

                            new sap.ui.layout.form.FormContainer(
                                "F1C4",
                                {
                                    title: "Anotações",
                                    formElements: [new sap.ui.layout.form.FormElement(
                                    {
                                        fields: [new sap.ui.commons.TextArea()]
                                    })]
                                }),

                            new sap.ui.layout.form.FormContainer(
                                "F1C5",
                                {
                                    title: "Prescrição",
                                    formElements: [new sap.ui.layout.form.FormElement(
                                    {
                                        fields: [new sap.ui.commons.ComboBox(
                                        {
                                            items: [
                                                new sap.ui.core.ListItem(
                                                {
                                                    text: "Medicamento"
                                                }),
                                                new sap.ui.core.ListItem(
                                                {
                                                    text: "Exame"
                                                }),
                                                new sap.ui.core.ListItem(
                                                {
                                                    text: "Procedimento"
                                                })

                                            ]
                                        })]
                                    })]
                                }),

                            new sap.ui.layout.form.FormContainer(
                                "F1C6",
                                {
                                    title: "Resultado",
                                    formElements: [new sap.ui.layout.form.FormElement(
                                    {
                                        fields: [new sap.ui.commons.TextArea()]
                                    })]
                                }),
                            new sap.ui.layout.form.FormContainer(
                                "F1C7",
                                {
                                    title: "Notas Pessoais",
                                    formElements: [new sap.ui.layout.form.FormElement(
                                    {
                                        fields: [new sap.ui.commons.TextArea()]
                                    })]
                                }),
                            new sap.ui.layout.form.FormContainer(
                                "F1C8",
                                {
                                    formElements: [new sap.ui.layout.form.FormElement(
                                    {

                                        fields: [new sap.ui.commons.Button(
                                        {
                                            text: "Salvar",
                                            style: sap.ui.commons.ButtonStyle.Accept,
                                            press: function(
                                                e)
                                            {
                                                console
                                                    .log("saved");
                                                var dia = new sap.ui.commons.Dialog(
                                                {
                                                    width: undefined, // sap.ui.core.CSSSize
                                                    height: undefined, // sap.ui.core.CSSSize
                                                    scrollLeft: 0, // int
                                                    scrollTop: 0, // int
                                                    title: "PEP gerado", // string

                                                    showCloseButton: true, // boolean
                                                    resizable: true, // boolean
                                                    minWidth: undefined, // sap.ui.core.CSSSize
                                                    minHeight: undefined, // sap.ui.core.CSSSize
                                                    maxWidth: undefined, // sap.ui.core.CSSSize
                                                    maxHeight: undefined, // sap.ui.core.CSSSize
                                                    contentBorderDesign: sap.ui.commons.enums.BorderDesign.None, // sap.ui.commons.enums.BorderDesign
                                                    modal: false, // boolean
                                                    accessibleRole: sap.ui.core.AccessibleRole.Dialog, // sap.ui.core.AccessibleRole
                                                    keepInWindow: false, // boolean,
                                                    // since
                                                    // 1.9.0
                                                    autoClose: true, // boolean,
                                                    // since
                                                    // 1.10
                                                    tooltip: undefined, // sap.ui.core.TooltipBase
                                                    buttons: [], // sap.ui.core.Control
                                                    content: [], // sap.ui.core.Control
                                                    defaultButton: undefined, // sap.ui.commons.Button
                                                    initialFocus: undefined, // sap.ui.core.Control
                                                    closed: [

                                                        function(
                                                            oEvent)
                                                        {
                                                            var control = oEvent
                                                                .getSource();
                                                        },
                                                        this
                                                    ]
                                                });

                                                dia
                                                    .open();
                                            }
                                        })]
                                    })]
                                }),

                        ]
                    });

                return new sap.m.Page(
                {
                    title: "Prontuário Eletrônico do Paciente",
                    showNavButton: true,
                    navButtonPress: oController.onNavButtonPress,
                    content: [oForm1]
                });
            }

        });