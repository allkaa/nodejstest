'use strict';

// assigning to exports will not modify module, must use module.exports
module.exports = (width) => {
  return {
    area: () => width ** 2
  };
};
