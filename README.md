 <Downshift>
        {(props) => {
          return (
            <div>
              <label {...props.getLabelProps()} />
              <input {...props.getInputProps()} />
              <button {...props.getToggleButtonProps()}>{props.isOpen ? 'close' : 'open'}</button>
              {props.selectedItem ? <button onClick={props.clearSelection}>x</button> : ''}
              <ul
                {...props.getMenuProps({
                  style: {
                    height: 200,
                    overflowY: props.isOpen ? 'scroll' : ''
                  }
                })}
              >
                {props.isOpen
                  ? getItems(props.inputValue).map((item, index) => (
                      <li
                        key={index}
                        {...props.getItemProps({
                          item: item.name,
                          key: item.index,
                          style: {
                            background: index === props.highlightedIndex ? 'grey' : '#fff'
                          }
                        })}
                      >
                        {item.name}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          );
        }}
      </Downshift>