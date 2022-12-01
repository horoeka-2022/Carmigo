import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const eventSchema = Yup.object({
  name: Yup.string().required('Required'),
  gardenIds: Yup.array().min(1, 'At least one garden should be selected'),
  produceType: Yup.string().required('Required'),
})

export default function ProduceForm({
  submitProduce,
  gardens,
  produceTypes,
  initialFormData,
  // action,
}) {
  return (
    <>
      <section className="px-20 py-24 ">
        <h1 className="form-title text-2xl font-semibold font-sans ">
          First Name
        </h1>
        <Formik
          initialValues={initialFormData}
          validationSchema={eventSchema}
          onSubmit={(values) => {
            submitProduce(values)
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-content">
              <div className="field flex flex-col box-border w-80 ">
                <label htmlFor="name" className="label border-style: solid;">
                  {' '}
                  Produce Name{' '}
                </label>{' '}
                <Field
                  className="form-box border-2 border-blue rounded-md pl-2"
                  id="name "
                  name="name"
                  type="text"
                  placeholder="Produce Name"
                />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <label htmlFor="garden" className="label leading-10">
                  Email
                </label>
                {errors.produceType && touched.produceType ? (
                  <p>{errors.produceType}</p>
                ) : null}
                <Field
                  id="produceType"
                  name="produceType"
                  placeholder="produce name"
                >
                  {({ field }) => (
                    <select
                      className="border-2 border-blue rounded-md"
                      {...field}
                    >
                      <option value=""></option>
                      {produceTypes.map(({ id, name }) => (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
              </div>

              <div className="pt-0 flex flex-col space-y-4 tracking-wide">
                <h1 className="font-semibold font-sans text-xl mt-10 ">
                  Profile Picture
                </h1>
                <ul>
                  {gardens?.length ? (
                    gardens.map((garden) => {
                      return (
                        <li
                          key={garden.id}
                          value="hello"
                          className="leading-10"
                        >
                          <Field
                            value={garden.id.toString()}
                            input
                            type="checkbox"
                            class="checked:accent-orange text-white mr-5"
                            name="gardenIds"
                          />
                          {errors.gardenIds && touched.gardenIds ? (
                            <p>{errors.gardenIds}</p>
                          ) : null}
                          {garden.name}
                        </li>
                      )
                    })
                  ) : (
                    <p>No produce yet</p>
                  )}
                </ul>
              </div>

              <div className="rounded-md pt-14 pl-40">
                <button type="button" className="submit-button">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </>
  )
}