import React, { useState } from 'react';

import { isEmpty } from 'lodash/fp';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Divider, FlexboxGrid, Form, List } from 'rsuite';

import { Button, PillSmallButton } from '@namespace/storybook/src/components/atoms';

import { SectionTitle, SectionWrapper, ListItemContent, FormInput } from './styled';

const FormItemListSection = function ({ addItem, items, itemType, removeItem, titleKey }) {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [text, changeText] = useState('');

  const handleAddItem = () => {
    if (text === '') return;

    dispatch(addItem(text));
    changeText('');
  };

  return (
    <SectionWrapper>
      <SectionTitle>{intl.messages[titleKey]}</SectionTitle>
      <div>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item>
            <Form onSubmit={handleAddItem}>
              <Form.Group>
                <FormInput
                  helperText="Required"
                  label={intl.messages['input.labelAdd']}
                  name="addItemInput"
                  onChange={value => changeText(value)}
                  placeholder=""
                  value={text}
                />
              </Form.Group>
              <Form.Group>
                <Button onClick={handleAddItem}>
                  {intl.messages['button.submit']} {itemType}
                </Button>
              </Form.Group>
            </Form>
            <br />
            <div>
              {!isEmpty(items) && (
                <List bordered>
                  {items.map((item, i) => (
                    <List.Item key={`#${i.toString()}-${itemType}`} style={{ listStyle: 'none' }}>
                      <ListItemContent>
                        {item.text}
                        <PillSmallButton onClick={() => dispatch(removeItem(item))} type="button">
                          x
                        </PillSmallButton>
                      </ListItemContent>
                    </List.Item>
                  ))}
                </List>
              )}
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
      </div>
    </SectionWrapper>
  );
};

FormItemListSection.propTypes = {
  addItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })).isRequired,
  itemType: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  titleKey: PropTypes.string.isRequired,
};

export default FormItemListSection;
