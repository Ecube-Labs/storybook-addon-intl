function managerEntries(entry = []) {
  return [...entry, require.resolve('./preset/manager')];
}

function config(entry = []) {
  return [...entry, require.resolve('./preset/preview'), require.resolve('./preset/addArgs')];
}

module.exports = {
  managerEntries,
  config,
};
