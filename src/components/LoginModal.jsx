import * as React from 'react';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Portal } from '@mui/base/Portal';
import { FocusTrap } from '@mui/base/FocusTrap';
import { Button } from '@mui/base/Button';
import { unstable_useModal as useModal } from '@mui/base/unstable_useModal';
import Fade from '@mui/material/Fade';

// ... (Rest of the Modal code. This should remain the same)

export function ReusableModal({ open, onClose, children }) {
  // ... (Rest of the Modal code)

  return (
    <Portal ref={portalRef} container={container} disablePortal={disablePortal}>
      {/* ... */}
      <CustomModalRoot {...rootProps}>
        {!hideBackdrop ? <CustomModalBackdrop {...backdropProps} /> : null}
        <FocusTrap
          disableEnforceFocus={disableEnforceFocus}
          disableAutoFocus={disableAutoFocus}
          disableRestoreFocus={disableRestoreFocus}
          isEnabled={isTopModal}
          open={open} // <-- Control open state with 'open' prop
        >
          {React.cloneElement(children, childProps)}
        </FocusTrap>
      </CustomModalRoot>
    </Portal>
  );
}
