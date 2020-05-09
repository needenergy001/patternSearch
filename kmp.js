$(function (){

	$('#getResult').on('click', function() {
		event.preventDefault();
		

		let subString = $("#substring").val();
		let string = $('#string').val();
		let result = $('#result');
		let stringResult = $('#resultString');
		let resultFound = [];
		kmp_search(string, subString);

		for (let i = 0; i < l; i++){
			FOUND[i+1];
		}
		
		result.html(`<h3>The location found </h3>
		<h4> ${FOUND} </h4>`);

		stringResult.html(`
		<h3> The full pattern  </h3>
		<p> ${string} </p>`);
	});

});


let FOUND = [];
let l = 0;

const kmp_table = (W, T) =>
{
	let pos = 2;
	let  cnd = 0;
	let length = W.length;

	T[0] = -1;
	T[1] = 0;

	while (pos < length)
	{
		if (W[pos - 1] == W[cnd])
		{
			T[pos] = cnd + 1;
			cnd++;
			pos++;
		}
		else if (cnd > 0)
			cnd = T[cnd];
		else
		{
			T[pos] = 0;
			pos++;
		}
	}
}

//Search function
const kmp_search = (S, W) =>
{

	let m = 0;
	let i = 0;
	let sizeS = S.length;
	let sizeW = W.length;

	let T = sizeW;

	kmp_table(W, T);

	while ((m + i) < sizeS)
	{
		if (W[i] == S[m + i])
		{
			if (i == (sizeW - 1))
			{
				//Add the start index of match in the FOUND table
				FOUND[l++] = m;
			}

			i++;
		}
		else
		{
			if (T[i] > -1)
			{
				m = m + i - T[i];
				i = T[i];
			}
			else
			{
				m = m + 1;
				i = 0;
			}
		}
	}


}

