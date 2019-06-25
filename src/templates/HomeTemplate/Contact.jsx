import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { encode } from '../../utils/functions';
import CommonContainer from '../../components/CommonContainer';
import LabelInput from '../../components/LabelInput';
import { Flex, Box } from 'rebass';
import Button from '../../components/Button';
import Text from '../../components/Text';

const formName = 'Contacto';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (values, actions) => {
    setFormError(false);
    try {
      await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({
          'form-name': formName,
          ...values,
        }),
      });
      setMessageSent(true);
      alert('Your message has been sent');
      actions.resetForm();
    } catch (exception) {
      setFormError(true);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <CommonContainer py={2}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={handleSubmit}
        render={({ isSubmitting, handleSubmit }) => {
          const disabled = isSubmitting || messageSent;

          return (
            <Box
              onSubmit={handleSubmit}
              as="form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name={formName}
              my={4}
              mx="auto"
              style={{ maxWidth: '40em' }}
            >
              <Text as="h2" pb={4} fontSize={4} fontWeight="bold">
                Contacto
              </Text>
              <p hidden>
                <label>
                  Don’t fill this out: <Field name="bot-field" />
                </label>
              </p>

              <Box pb={2} width={1}>
                <LabelInput
                  text="Nombre"
                  name="name"
                  autoComplete="name"
                  disabled={disabled}
                />
              </Box>
              <Box pb={2} width={1}>
                <LabelInput
                  text="Correo"
                  name="email"
                  autoComplete="email"
                  type="email"
                  disabled={disabled}
                />
              </Box>
              <LabelInput
                text="Mensaje"
                name="message"
                disabled={disabled}
                component="textarea"
              />
              <Flex pt={3}>
                <Box ml="auto">
                  <Button px={4} py={2} disabled={disabled} type="submit">
                    Send
                  </Button>
                </Box>
              </Flex>
            </Box>
          );
        }}
      />
    </CommonContainer>
  );
};

export default Contact;
