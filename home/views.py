from django.shortcuts import render

def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'index.html')

def regisiter(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        # Retrieve other form fields

        # Create a new instance of the model and save the data
        my_form_data = MyFormData(name=name, email=email)
        my_form_data.save()

        # Return a JSON response indicating success
        return JsonResponse({'message': 'Form data saved successfully'})

    # Return an error response if the request method is not POST
    return render(request,'index.html')