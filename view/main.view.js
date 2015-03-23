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
//									title : new sap.ui.core.Title({
//										text : "Prontuário Eletônico",
//										icon : "sap-icon://doctor"
//									}),
									layout : oLayout1,
									formContainers : [
											new sap.ui.layout.form.FormContainer(
													"F1C1",
													{
														title : "Sinais Vitais",
														formElements : [
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Name",
																			fields : [
																					new sap.ui.commons.TextField(
																							{
																								value : "Max"
																							}),
																					new sap.ui.commons.TextField(
																							{
																								value : "Mustermann"
																							}) ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Date of Birth",
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
																			label : "Gender",
																			fields : [ new sap.ui.commons.RadioButtonGroup(
																					{
																						columns : 2,
																						items : [
																								new sap.ui.core.Item(
																										{
																											text : "male"
																										}),
																								new sap.ui.core.Item(
																										{
																											text : "female"
																										}) ],
																					}) ]
																		}) ]
													}),
											new sap.ui.layout.form.FormContainer(
													"F1C2",
													{
														title : "Queixas",
														formElements : [
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Street / Number",
																			fields : [
																					new sap.ui.commons.TextField(),
																					new sap.ui.commons.TextField(
																							{
																								width : "3em"
																							}) ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Zip Code / City",
																			fields : [
																					new sap.ui.commons.TextField(),
																					new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Country",
																			fields : [ new sap.ui.commons.TextField(
																					{
																						layoutData : new sap.ui.layout.GridData(
																								{
																									span : "L2 M2 S12"
																								})
																					}) ]
																		}) ]
													}),
											new sap.ui.layout.form.FormContainer(
													"F1C3",
													{
														title : "Diagnóstico",
														formElements : [
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Phone Number",
																			fields : [ new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Mobile",
																			fields : [ new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Email",
																			fields : [ new sap.ui.commons.TextField() ]
																		}) ]
													}),

											new sap.ui.layout.form.FormContainer(
													"F1C4",
													{
														title : "Anotações",
														formElements : [
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Phone Number",
																			fields : [ new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Mobile",
																			fields : [ new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Email",
																			fields : [ new sap.ui.commons.TextField() ]
																		}) ]
													}),

											new sap.ui.layout.form.FormContainer(
													"F1C5",
													{
														title : "Prescrição",
														formElements : [
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Phone Number",
																			fields : [ new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Mobile",
																			fields : [ new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Email",
																			fields : [ new sap.ui.commons.TextField() ]
																		}) ]
													}),

											new sap.ui.layout.form.FormContainer(
													"F1C6",
													{
														title : "Resultado",
														formElements : [
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Phone Number",
																			fields : [ new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Mobile",
																			fields : [ new sap.ui.commons.TextField() ]
																		}),
																new sap.ui.layout.form.FormElement(
																		{
																			label : "Email",
																			fields : [ new sap.ui.commons.TextField() ]
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