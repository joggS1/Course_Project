import { render, screen } from '@testing-library/react';

import { Button } from '@/shared/ui/Button';

describe('button', () => {
    test('to be in the document', () => {
        render(<Button theme='outlined'>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('to have class', () => {
        render(<Button theme='outlined'>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('outlined');
    });
});
