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
					getControllerName : function() {
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
					createContent : function(oController) {

						var oLayout1 = new sap.ui.layout.form.ResponsiveGridLayout(
								"L1");

						var oForm1 = new sap.ui.layout.form.Form(
								"F1",
								{
									// title : new sap.ui.core.Title({
									// text : "Prontuário Eletônico",
									// icon : "sap-icon://doctor"
									// }),
									layout : oLayout1,
									formContainers : [
											new sap.ui.layout.form.FormContainer(
													"F1C1",
													{
														title : "Dados Pessoais",
														formElements : [
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Nome",
																			fields : [
																					new sap.ui.commons.TextField(),
																					new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Nascimento",
																			fields : [ new sap.ui.commons.DatePicker(
																					{
																						yyyymmdd : "19990909",
																						layoutData : new sap.ui.layout.GridData(
																								{
																									span : "L2 M2 S12"
																								})
																					}) ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Sexo",
																			fields : [ new sap.ui.commons.RadioButtonGroup(
																					{
																						columns : 2,
																						items : [
																								new sap.ui.core.Item(
																										{
																											text : "Masculino"
																										}),
																								new sap.ui.core.Item(
																										{
																											text : "Feminino"
																										}) ],
																					}) ]
																		}) ]
													}),
											new sap.ui.layout.form.FormContainer(
													"F1C2",
													{
														title : "Sinais Vitais",
														formElements : [
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Temperatura",
																			fields : [ new sap.ui.commons.Slider(
																					{
																						min : 20, // float
																						max : 45, // float
																						value : 28, // float
																						smallStepWidth : 0.1, // float
																						// totalUnits
																						// : ,
																						// //
																						// int
																						stepLabels : true, // boolean
																						labels : [
																								"20",
																								"30",
																								"45" ]
																					// string[]

																					}) ]
																		}),

																new sap.ui.layout.form.FormElement(
																		{
																			label : "Pulso",
																			fields : [ new sap.ui.commons.Slider(
																					{
																						min : 40, // float
																						max : 180, // float
																						value : 80, // float
																						smallStepWidth : 1, // float
																						// totalUnits
																						// : ,
																						// //
																						// int
																						stepLabels : true, // boolean
																						labels : [
																								"40",
																								"180" ]
																					// string[]
																					}) ]
																		}),

																new sap.ui.layout.form.FormElement(
																		{
																			label : "Respiração",
																			fields : [ new sap.ui.commons.Slider(
																					{
																						min : 8, // float
																						max : 70, // float
																						value : 15, // float
																						smallStepWidth : 1, // float
																						stepLabels : true, // boolean
																						labels : [
																								"8",
																								"70" ]
																					// string[]
																					}) ]
																		}),

																new sap.ui.layout.form.FormElement(
																		{
																			label : "Pressão",
																			fields : [
																					new sap.ui.commons.Slider(
																							{
																								min : 80, // float
																								max : 200, // float
																								value : 140, // float
																								smallStepWidth : 1, // float
																								stepLabels : true, // boolean
																								labels : [
																										"80",
																										"200" ]
																							}),

																					new sap.ui.commons.Slider(
																							{
																								min : 50, // float
																								max : 120, // float
																								value : 70, // float
																								smallStepWidth : 1, // float
																								stepLabels : true, // boolean
																								labels : [
																										"50",
																										"120" ]
																							}),

																			]
																		}),

														]
													}),
											new sap.ui.layout.form.FormContainer(
													"F1C21",
													{
														title : "Queixas",
														formElements : [ new sap.ui.layout.form.FormElement(
																{
																	fields : [ new sap.ui.commons.TextArea(
																			{
																				value : "O paciente queixa-se de "
																			}) ]
																}) ]
													}),
											new sap.ui.layout.form.FormContainer(
													"F1C3",
													{
														title : "Diagnóstico",
														formElements : [ new sap.ui.layout.form.FormElement(
																{
																	label : "CID-10",
																	fields : [ new sap.ui.commons.ComboBox(
																			{
																			// items
																			// :
																			}) ]
																}) ]
													}),

											new sap.ui.layout.form.FormContainer(
													"F1C4",
													{
														title : "Anotações",
														formElements : [ new sap.ui.layout.form.FormElement(
																{
																	fields : [ new sap.ui.commons.TextArea() ]
																}) ]
													}),

											new sap.ui.layout.form.FormContainer(
													"F1C5",
													{
														title : "Prescrição",
														formElements : [ new sap.ui.layout.form.FormElement(
																{
																	label : "Phone Number",
																	fields : [ new sap.ui.commons.TextField() ]
																}) ]
													}),

											new sap.ui.layout.form.FormContainer(
													"F1C6",
													{
														title : "Resultado",
														formElements : [ new sap.ui.layout.form.FormElement(
																{
																	label : "Phone Number",
																	fields : [ new sap.ui.commons.TextField() ]
																}) ]
													}),
											new sap.ui.layout.form.FormContainer(
													"F1C7",
													{
														formElements : [ new sap.ui.layout.form.FormElement(
																{

																	fields : [ new sap.ui.commons.Button(
																			{
																				text : "Salvar",
																				style : sap.ui.commons.ButtonStyle.Accept
																			}) ]
																}) ]
													}),

									]
								});

						return new sap.m.Page({
							title : "Prontuário Eletrônico do Paciente",
							content : [ oForm1 ]
						});
					}

				});