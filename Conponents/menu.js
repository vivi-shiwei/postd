import React from 'react'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Box,
    Flex
} from '@chakra-ui/core'

const menu = () => {
    return (
        <Flex>
            <Menu>
                {({ isOpen }) => (
                    <React.Fragment>
                        <MenuButton isActive={isOpen} as={Button} rightIcon="chevron-down" bg="white">
                            {isOpen}
                        </MenuButton>
                        <MenuList>
                            <MenuItem>編輯</MenuItem>
                            <MenuItem onClick={() => alert("確定刪除嗎")}>刪除</MenuItem>
                        </MenuList>
                    </React.Fragment>
                )}
            </Menu>
        </Flex>
    )
}
export default menu